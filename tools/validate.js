// Prüft alle Inhalte: Aufbau, Wertebereiche, Dubletten und Anzahl pro Thema.
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const script = html.slice(html.indexOf("<script>") + 8, html.lastIndexOf("</script>"));
const catSrc = script.slice(script.indexOf("const ALL_CATEGORIES = ["), script.indexOf("const CONTENT = {};"));
const dataSrc = script.slice(script.indexOf("const CONTENT = {};"), script.indexOf("// Nur Themen mit Inhalten anzeigen"));
const { ALL_CATEGORIES, GROUPS } = new Function(catSrc + "; return { ALL_CATEGORIES, GROUPS };")();
const { CONTENT, LEGACY_CARDS, DAY_FACTS } = new Function("const ALL_CATEGORIES = arguments[0];" + dataSrc + "; return { CONTENT, LEGACY_CARDS, DAY_FACTS: typeof DAY_FACTS === 'undefined' ? null : DAY_FACTS };")(ALL_CATEGORIES);
const CATEGORIES = ALL_CATEGORIES.filter(c => Object.keys(CONTENT[c.key]).length || LEGACY_CARDS.some(l => l.category === c.name));
const missing = ALL_CATEGORIES.filter(c => CATEGORIES.indexOf(c) === -1).map(c => c.key);
const problems = [];
const grouped = GROUPS.flatMap(g => g.keys);
ALL_CATEGORIES.forEach(c => { const n = grouped.filter(k => k === c.key).length; if (n !== 1) problems.push(`Gruppe: ${c.key} ist ${n}× zugeordnet`); });
grouped.forEach(k => { if (!ALL_CATEGORIES.some(c => c.key === k)) problems.push(`Gruppe: unbekanntes Thema ${k}`); });
const WMIN = Number(process.env.WMIN || 70);
const seenText = new Map();
const ids = new Set();
const MIN = Number(process.env.MIN || 150);
const dup = (t, where) => {
  const k = t.toLowerCase().replace(/[^a-zäöüß0-9]/g, "");
  if (seenText.has(k)) problems.push(`Dublette: ${where} == ${seenText.get(k)}`); else seenText.set(k, where);
};
const str = (v, where) => { if (typeof v !== "string" || v.trim().length < 3) problems.push(`Text fehlt: ${where}`); else if (/"/.test(v)) problems.push(`Gerades Anführungszeichen: ${where}`); };
const rows = [];
let total = 0;
// Kontext-Tipps und Erklärungen: Pflicht, sobald ein Thema überarbeitet ist (oder überall mit STRICT=1)
const STRICT = process.env.STRICT === "1";
const EXMIN = 16, HMIN = 10;
const nWords = t => String(t || "").trim().split(/\s+/).filter(Boolean).length;
const fold = t => String(t).toLowerCase().replace(/ß/g, "ss").replace(/[^a-zäöü0-9]/g, "");
let hintTotal = 0, hintHave = 0;
const doneThemes = [];
const checkHint = (hint, expl, at, required, correctText, isTf) => {
  hintTotal++;
  if (hint) hintHave++;
  if (!required) return;
  if (typeof hint !== "string" || nWords(hint) < HMIN) problems.push(`Tipp fehlt/zu kurz: ${at}`);
  else {
    if (/"/.test(hint)) problems.push(`Gerades Anführungszeichen im Tipp: ${at}`);
    if (correctText) { const c = fold(correctText); if (c.length >= 4 && fold(hint).indexOf(c) !== -1) problems.push(`Tipp verrät Antwort (${correctText}): ${at}`); }
    if (isTf && /\b(richtig|falsch|stimmt|zutreffend|wahr)\b/i.test(hint)) problems.push(`Tipp wertet die Aussage: ${at}`);
  }
  if (nWords(expl) < EXMIN) problems.push(`Erklärung zu kurz (${nWords(expl)} W.): ${at}`);
};
for (const cat of CATEGORIES) {
  const c = CONTENT[cat.key] || {};
  const cards = LEGACY_CARDS.filter(x => x.category === cat.name).concat(c.cards || []);
  const revised = STRICT || (c.quiz || []).some(x => x.length > 4) || (c.tf || []).some(x => x.length > 3);
  if (revised) doneThemes.push(cat.key);
  cards.forEach(card => {
    const cq = card.quiz || {};
    checkHint(cq.hint, cq.explanation, card.id + ".quiz", revised, (cq.options || [])[cq.correct], false);
    if (ids.has(card.id)) problems.push(`Doppelte Karten-ID ${card.id}`); ids.add(card.id);
    if (card.category !== cat.name) problems.push(`Kategorie falsch: ${card.id}`);
    if (card.tagColor !== cat.color) problems.push(`Farbe falsch: ${card.id}`);
    ["title", "story", "funFact"].forEach(k => str(card[k], card.id + "." + k));
    const q = card.quiz || {};
    str(q.question, card.id + ".quiz"); str(q.explanation, card.id + ".expl");
    if (!Array.isArray(q.options) || q.options.length !== 3) problems.push(`Optionen: ${card.id}`);
    if (!(q.correct >= 0 && q.correct < 3)) problems.push(`correct: ${card.id}`);
    dup(card.title, card.id);
  });
  const w = c.wissen || [], f = c.facts || [], qz = c.quiz || [], tf = c.tf || [], hl = c.hl || [];
  w.forEach((x, i) => { const at = `${cat.key}:w${i}`; if (!Array.isArray(x) || x.length !== 2) problems.push(`Aufbau ${at}`); str(x[0], at); str(x[1], at); dup(x[1], at); });
  f.forEach((x, i) => { const at = `${cat.key}:f${i}`; str(x, at); dup(x, at); });
  if (revised && hl.length) problems.push(`${cat.key}: Vergleiche (hl) noch nicht umgewandelt`);
  qz.forEach((x, i) => { const at = `${cat.key}:q${i}`; if (!Array.isArray(x) || x.length < 4 || x.length > 5) problems.push(`Aufbau ${at}`); str(x[0], at); str(x[3], at);
    checkHint(x[4], x[3], at, revised, (x[1] || [])[x[2]], false);
    if (!Array.isArray(x[1]) || x[1].length < 3 || x[1].length > 4) problems.push(`Optionen ${at}`); else x[1].forEach(o => { if (typeof o !== "string" || !o.trim()) problems.push(`Option leer: ${at}`); else if (/"/.test(o)) problems.push(`Gerades Anführungszeichen: ${at}`); });
    if (!(x[2] >= 0 && x[2] < (x[1] || []).length)) problems.push(`Index ${at}`); dup(x[0], at); });
  tf.forEach((x, i) => { const at = `${cat.key}:t${i}`; if (!Array.isArray(x) || x.length < 3 || x.length > 4 || typeof x[1] !== "boolean") problems.push(`Aufbau ${at}`); str(x[0], at); str(x[2], at); dup(x[0], at);
    checkHint(x[3], x[2], at, revised, null, true); });
  hl.forEach((x, i) => { const at = `${cat.key}:h${i}`; if (!Array.isArray(x) || x.length < 4 || x.length > 5 || (x[2] !== 0 && x[2] !== 1)) problems.push(`Aufbau ${at}`); str(x[0], at); str(x[1], at); str(x[3], at);
    if (x[4] && (!Array.isArray(x[4]) || x[4].length !== 2)) problems.push(`Labels ${at}`); dup(x[0] + x[1], at); });
  const words = w.map(x => String(x[1]).split(/\s+/).length);
  const shortW = words.filter(n => n < 70).length;
  if (WMIN) w.forEach((x, i) => { if (words[i] < WMIN) problems.push(`Wissen zu kurz (${words[i]} Wörter): ${cat.key}:w${i}`); });
  const written = cards.length + w.length + f.length + qz.length + tf.length + hl.length;
  const items = cards.length * 3 + w.length + f.length + qz.length + tf.length + hl.length;
  total += items;
  const tfTrue = tf.filter(x => x[1] === true).length;
  const qDist = [0, 0, 0, 0]; qz.forEach(x => qDist[x[2]]++);
  rows.push(`${cat.key.padEnd(14)} Karten ${String(cards.length).padStart(2)} | Wissen ${String(w.length).padStart(3)} | Fakten ${String(f.length).padStart(3)} | Quiz ${String(qz.length).padStart(3)} ${JSON.stringify(qDist.slice(0, 3))} | R/F ${String(tf.length).padStart(3)} (${tfTrue} wahr) | G/K ${String(hl.length).padStart(3)} | geschrieben ${written} | Inhalte ${items} | Wissen Ø ${Math.round(words.reduce((a, b) => a + b, 0) / Math.max(1, words.length))} W.${shortW ? " (" + shortW + " kurz)" : ""}`);
  if (written < MIN) problems.push(`${cat.key}: nur ${written} Einträge (< ${MIN})`);
}
console.log(rows.join("\n"));
console.log(`GESAMT Lerninhalte: ${total} in ${CATEGORIES.length} Themen`);
console.log(`Kontext-Tipps: ${hintHave}/${hintTotal} · überarbeitet: ${doneThemes.length}/${CATEGORIES.length} Themen`);
if (DAY_FACTS) {
  const keys = Object.keys(DAY_FACTS);
  const dim = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  const want = dim.flatMap((n, m) => Array.from({ length: n }, (_, d) => String(m + 1).padStart(2, "0") + "-" + String(d + 1).padStart(2, "0")));
  want.forEach(k => { if (!DAY_FACTS[k]) problems.push(`Tagesfakt fehlt: ${k}`); });
  keys.forEach(k => {
    const f = DAY_FACTS[k];
    if (want.indexOf(k) === -1) problems.push(`Tagesfakt: ungültiges Datum ${k}`);
    if (!f || typeof f.t !== "string" || typeof f.x !== "string" || typeof f.e !== "string") { problems.push(`Tagesfakt Aufbau ${k}`); return; }
    if (f.y !== undefined && !(Number.isInteger(f.y) && f.y > -3000 && f.y <= 2026)) problems.push(`Tagesfakt Jahr ${k}`);
    [f.t, f.x].forEach(t => { if (/"/.test(t)) problems.push(`Gerades Anführungszeichen: Tag ${k}`); });
    const n = nWords(f.x); if (n < 22 || n > 80) problems.push(`Tagesfakt Länge (${n} W.): ${k}`);
    dup(f.x, "tag:" + k);
  });
  console.log(`Tagesfakten: ${keys.length}/366`);
}
if (missing.length) console.log(`Noch ohne Inhalte (ausgeblendet): ${missing.join(", ")}`);
if (problems.length) { console.error(problems.join("\n")); console.error(`${problems.length} Probleme`); process.exit(1); }
console.log("Validierung OK");
