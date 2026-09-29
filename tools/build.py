#!/usr/bin/env python3
"""Baut aus src/app.html und src/data/*.js eine einzige index.html (alles inline, offline)."""
import pathlib, re, subprocess, sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
SRC = ROOT / "src"
ORDER = ["schildkroeten", "mythologie", "voegel", "pflanzen", "umwelt", "kosmos", "erde", "suedafrika",
         "disney", "maerchen", "tauchen", "meer", "stoa", "gehirn", "pilze", "mittelalter"]

def main():
    parts = [(SRC / "data" / "_legacy.js").read_text(encoding="utf-8")]
    for key in ORDER:
        f = SRC / "data" / f"{key}.js"
        if f.exists():
            parts.append(f.read_text(encoding="utf-8"))
        else:
            print(f"Hinweis: {f.name} fehlt noch", file=sys.stderr)
    data = "\n".join(p.strip() for p in parts)
    data = "\n".join("  " + line if line else "" for line in data.splitlines())
    app = (SRC / "app.html").read_text(encoding="utf-8")
    assert app.count("/*@@DATA@@*/") == 1
    out = app.replace("  /*@@DATA@@*/", data.rstrip())
    (ROOT / "index.html").write_text(out, encoding="utf-8")
    r = subprocess.run(["node", str(ROOT / "tools" / "validate.js")], capture_output=True, text=True)
    print(r.stdout, end="")
    if r.returncode != 0:
        print(r.stderr, file=sys.stderr)
        sys.exit(1)
    print(f"index.html geschrieben ({len(out.encode('utf-8')) / 1024:.0f} KB)")

if __name__ == "__main__":
    main()
