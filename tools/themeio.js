// Werkzeug zur Überarbeitung eines Themas.
//   node tools/themeio.js dump <key>            → kompakte Übersicht aller Fragen
//   node tools/themeio.js apply <key> <patch>   → Tipps/Erklärungen einspielen, Vergleiche umwandeln, Datei neu schreiben
// Patch (JSON): { c: [[tipp, erklärung]…], q: [[tipp, erklärung]…], t: [[tipp, erklärung]…],
//                 add: [{ q, o, a, x, k } | { s, v, x, k }…], w: { "<index>": "neuer Wissenstext" }, lc: { "<kartenId>": [tipp, erklärung] } }
const fs = require("fs");
const path = require("path");
const ROOT = path.resolve(__dirname, "..");
const [, , cmd, key, patchFile] = process.argv;
const file = path.join(ROOT, "src", "data", key + ".js");
const src = fs.readFileSync(file, "utf8");
const header = (src.match(/^\/\*[^\n]*\*\/\n/) || [""])[0];
const CONTENT = {};
new Function("CONTENT", src)(CONTENT);
const T = CONTENT[key];
if (!T) { console.error("Thema nicht gefunden: " + key); process.exit(1); }

const legacyFile = path.join(ROOT, "src", "data", "_legacy.js");
const legacySrc = fs.readFileSync(legacyFile, "utf8");
const LEGACY = new Function(legacySrc + "; return LEGACY_CARDS;")();
const catName = (T.cards && T.cards[0] && T.cards[0].category) || null;

if (cmd === "dump") {
  const out = [];
  const lc = LEGACY.filter(c => catName ? c.category === catName : false);
  lc.forEach(c => out.push(`LC ${c.id} | ${c.quiz.question} | ✔ ${c.quiz.options[c.quiz.correct]} | ✘ ${c.quiz.options.filter((_, i) => i !== c.quiz.correct).join(" / ")} | E: ${c.quiz.explanation}`));
  (T.cards || []).forEach((c, i) => out.push(`C${i} ${c.title} | ${c.quiz.question} | ✔ ${c.quiz.options[c.quiz.correct]} | ✘ ${c.quiz.options.filter((_, j) => j !== c.quiz.correct).join(" / ")} | E: ${c.quiz.explanation}`));
  (T.quiz || []).forEach((q, i) => out.push(`Q${i} ${q[0]} | ✔ ${q[1][q[2]]} | ✘ ${q[1].filter((_, j) => j !== q[2]).join(" / ")} | E: ${q[3]}`));
  (T.tf || []).forEach((t, i) => out.push(`T${i} [${t[1] ? "W" : "F"}] ${t[0]} | E: ${t[2]}`));
  (T.hl || []).forEach((h, i) => out.push(`H${i} ${h[0]} → ${h[1]} [${(h[4] || ["kleiner", "größer"])[h[2]]}] ${h[3]}`));
  console.log(out.join("\n"));
  console.log(`# ${lc.length} Altkarten, ${(T.cards || []).length} Karten, ${(T.quiz || []).length} Quiz, ${(T.tf || []).length} R/F, ${(T.hl || []).length} Vergleiche, ${(T.wissen || []).length} Wissen`);
  process.exit(0);
}

if (cmd === "wissen") {
  (T.wissen || []).forEach((w, i) => console.log(`W${i} ${w[0]}\n${w[1]}\n`));
  process.exit(0);
}

if (cmd !== "apply") { console.error("Befehl: dump | wissen | apply"); process.exit(1); }
const P = JSON.parse(fs.readFileSync(patchFile, "utf8"));
const need = (arr, n, what) => { if (arr && arr.length !== n) { console.error(`${what}: ${arr.length} statt ${n}`); process.exit(1); } };
need(P.c, (T.cards || []).length, "Karten");
need(P.q, (T.quiz || []).length, "Quiz");
need(P.t, (T.tf || []).length, "R/F");
(P.c || []).forEach((p, i) => { const q = T.cards[i].quiz; if (p[0]) q.hint = p[0]; if (p[1]) q.explanation = p[1]; });
(P.q || []).forEach((p, i) => { const q = T.quiz[i]; q.length = 4; if (p[1]) q[3] = p[1]; q[4] = p[0]; });
(P.t || []).forEach((p, i) => { const t = T.tf[i]; t.length = 3; if (p[1]) t[2] = p[1]; t[3] = p[0]; });
(P.add || []).forEach(a => {
  if (a.s !== undefined) T.tf.push([a.s, !!a.v, a.x, a.k]);
  else T.quiz.push([a.q, a.o, a.a || 0, a.x, a.k]);
});
Object.entries(P.w || {}).forEach(([i, txt]) => { T.wissen[Number(i)][1] = txt; });
if (P.add || P.dropHl) delete T.hl;

// Datei neu schreiben (einheitliches, gut lesbares Format)
const J = v => JSON.stringify(v);
const lines = [];
lines.push(`CONTENT.${key} = {`);
const blocks = [];
if (T.cards) {
  blocks.push("  cards: [\n" + T.cards.map(c => {
    const q = c.quiz;
    const extra = Object.keys(c).filter(k => ["id", "category", "tagColor", "title", "story", "funFact", "quiz"].indexOf(k) === -1);
    return "    {\n" +
      `      id: ${J(c.id)}, category: ${J(c.category)}, tagColor: ${J(c.tagColor)},\n` +
      `      title: ${J(c.title)},\n      story: ${J(c.story)},\n      funFact: ${J(c.funFact)},\n` +
      extra.map(k => `      ${k}: ${J(c[k])},\n`).join("") +
      "      quiz: {\n" +
      `        question: ${J(q.question)},\n        options: ${J(q.options).replace(/","/g, "\", \"")},\n        correct: ${q.correct},\n        explanation: ${J(q.explanation)}` +
      (q.hint ? `,\n        hint: ${J(q.hint)}` : "") + "\n      }\n    }";
  }).join(",\n") + "\n  ]");
}
const arr = (name, items, fmt) => blocks.push(`  ${name}: [\n` + items.map(x => "    " + fmt(x)).join(",\n") + "\n  ]");
const fmtArr = x => J(x).replace(/","/g, "\", \"").replace(/",\[/g, "\", [").replace(/\],(\d)/g, "], $1").replace(/,"/g, ", \"").replace(/",(true|false|\d)/g, "\", $1").replace(/(true|false|\d),"/g, "$1, \"");
if (T.wissen) arr("wissen", T.wissen, fmtArr);
if (T.facts) arr("facts", T.facts, J);
if (T.quiz) arr("quiz", T.quiz, fmtArr);
if (T.tf) arr("tf", T.tf, fmtArr);
if (T.hl) arr("hl", T.hl, fmtArr);
Object.keys(T).filter(k => ["cards", "wissen", "facts", "quiz", "tf", "hl"].indexOf(k) === -1).forEach(k => blocks.push(`  ${k}: ${J(T[k])}`));
const out = header + lines.join("\n") + "\n" + blocks.join(",\n") + "\n};\n";
// Kontrolle: neu eingelesen muss es dasselbe ergeben
const CHK = {};
new Function("CONTENT", out)(CHK);
if (JSON.stringify(CHK[key]) !== JSON.stringify(T)) { console.error("Serialisierung weicht ab – nichts geschrieben"); process.exit(1); }
fs.writeFileSync(file, out);

// Altkarten (in _legacy.js) direkt im Text ergänzen
let leg = legacySrc, legN = 0;
Object.entries(P.lc || {}).forEach(([id, p]) => {
  const start = leg.indexOf(`id: "${id}"`);
  if (start === -1) { console.error("Altkarte fehlt: " + id); process.exit(1); }
  const ex = leg.indexOf("explanation: ", start);
  const lineEnd = leg.indexOf("\n", ex);
  const indent = leg.slice(leg.lastIndexOf("\n", ex) + 1, ex);
  if (leg.slice(ex, lineEnd).trim().endsWith(",")) { console.error("Altkarte hat schon Tipp: " + id); process.exit(1); }
  leg = leg.slice(0, ex) + "explanation: " + J(p[1]) + ",\n" + indent + "hint: " + J(p[0]) + leg.slice(lineEnd);
  legN++;
});
if (legN) {
  const L2 = new Function(leg + "; return LEGACY_CARDS;")();
  if (L2.length !== LEGACY.length) { console.error("Altkarten kaputt"); process.exit(1); }
  fs.writeFileSync(legacyFile, leg);
}
console.log(`${key}: ${(P.c || []).length} Karten, ${(P.q || []).length} Quiz, ${(P.t || []).length} R/F, ${(P.add || []).length} neu, ${Object.keys(P.w || {}).length} Wissen, ${legN} Altkarten`);
