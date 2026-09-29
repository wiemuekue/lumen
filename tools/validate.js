// Prüft alle Inhalte: Aufbau, Wertebereiche, Dubletten und Anzahl pro Thema.
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const html = fs.readFileSync(path.join(ROOT, "index.html"), "utf8");
const script = html.slice(html.indexOf("<script>") + 8, html.lastIndexOf("</script>"));
const catSrc = script.slice(script.indexOf("const CATEGORIES = ["), script.indexOf("const CONTENT = {};"));
const dataSrc = script.slice(script.indexOf("const CONTENT = {};"), script.indexOf("/* =====================================================================\n     DATEN AUFBEREITEN"));
const CATEGORIES = new Function(catSrc + "; return CATEGORIES;")();
const { CONTENT, LEGACY_CARDS } = new Function("const CATEGORIES = arguments[0];" + dataSrc + "; return { CONTENT, LEGACY_CARDS };")(CATEGORIES);
const problems = [];
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
for (const cat of CATEGORIES) {
  const c = CONTENT[cat.key] || {};
  const cards = LEGACY_CARDS.filter(x => x.category === cat.name).concat(c.cards || []);
  cards.forEach(card => {
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
  qz.forEach((x, i) => { const at = `${cat.key}:q${i}`; if (!Array.isArray(x) || x.length !== 4) problems.push(`Aufbau ${at}`); str(x[0], at); str(x[3], at);
    if (!Array.isArray(x[1]) || x[1].length < 3 || x[1].length > 4) problems.push(`Optionen ${at}`); else x[1].forEach(o => { if (typeof o !== "string" || !o.trim()) problems.push(`Option leer: ${at}`); else if (/"/.test(o)) problems.push(`Gerades Anführungszeichen: ${at}`); });
    if (!(x[2] >= 0 && x[2] < (x[1] || []).length)) problems.push(`Index ${at}`); dup(x[0], at); });
  tf.forEach((x, i) => { const at = `${cat.key}:t${i}`; if (!Array.isArray(x) || x.length !== 3 || typeof x[1] !== "boolean") problems.push(`Aufbau ${at}`); str(x[0], at); str(x[2], at); dup(x[0], at); });
  hl.forEach((x, i) => { const at = `${cat.key}:h${i}`; if (!Array.isArray(x) || x.length < 4 || x.length > 5 || (x[2] !== 0 && x[2] !== 1)) problems.push(`Aufbau ${at}`); str(x[0], at); str(x[1], at); str(x[3], at);
    if (x[4] && (!Array.isArray(x[4]) || x[4].length !== 2)) problems.push(`Labels ${at}`); dup(x[0] + x[1], at); });
  const written = cards.length + w.length + f.length + qz.length + tf.length + hl.length;
  const items = cards.length * 3 + w.length + f.length + qz.length + tf.length + hl.length;
  total += items;
  const tfTrue = tf.filter(x => x[1] === true).length;
  const qDist = [0, 0, 0, 0]; qz.forEach(x => qDist[x[2]]++);
  rows.push(`${cat.key.padEnd(14)} Karten ${String(cards.length).padStart(2)} | Wissen ${String(w.length).padStart(3)} | Fakten ${String(f.length).padStart(3)} | Quiz ${String(qz.length).padStart(3)} ${JSON.stringify(qDist.slice(0, 3))} | R/F ${String(tf.length).padStart(3)} (${tfTrue} wahr) | G/K ${String(hl.length).padStart(3)} | geschrieben ${written} | Inhalte ${items}`);
  if (written < MIN) problems.push(`${cat.key}: nur ${written} Einträge (< ${MIN})`);
}
console.log(rows.join("\n"));
console.log(`GESAMT Lerninhalte: ${total}`);
if (problems.length) { console.error(problems.join("\n")); console.error(`${problems.length} Probleme`); process.exit(1); }
console.log("Validierung OK");
