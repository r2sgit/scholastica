#!/usr/bin/env python3
"""Wire the authored theology modules: ../tN-content.json -> content/theologia/tN.ts.

Sister to extract-modules.py (philosophy side), extended for the theology wing:
  - module label is `Theologia {ROMAN} · {title}`
  - `short` is set to latin_title (the field renders nowhere; kept faithful)
  - per-lesson `latin` mirrors the lesson `tag` (t1/t5 convention)
  - fin carries an optional `distinction` block (net-new on the theology side,
    RD4 fin reward stage); the JSON `fin.meta` field is dropped (not in ModuleMeta)
  - last exercise of each lesson carries latin_tag / doctrine_line / lesson_complete
  - <lat>...</lat> normalized to <span class="lat">...</span>

Content is copied verbatim otherwise -- no copy edits. Em-dashes are REPORTED,
not auto-fixed (wiring is not a content-authoring pass; per the module recipe
em-dash discipline is the content session's call, so a stray one is flagged to
R2 rather than silently changed).
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
SRC = os.path.join(ROOT, '..')
OUT = os.path.join(ROOT, 'content', 'theologia')
ROMAN = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII',
         8: 'VIII', 9: 'IX', 10: 'X', 11: 'XI', 12: 'XII', 13: 'XIII',
         14: 'XIV', 15: 'XV'}

# Which modules to wire this run (WP-A1 + WP-A2). T1/T5 already live.
MODULES = [int(x) for x in sys.argv[1:]] or [2, 3, 4, 8, 9, 10, 11, 12, 13, 14]

emdash_report = []


def norm_lat(node):
    if isinstance(node, str):
        return re.sub(r'<lat>([\s\S]*?)</lat>', r'<span class="lat">\1</span>', node)
    if isinstance(node, list):
        return [norm_lat(x) for x in node]
    if isinstance(node, dict):
        return {k: norm_lat(v) for k, v in node.items()}
    return node


def tl(s):
    """Template literal. Content is QA'd backtick- and ${-free; assert anyway."""
    assert '`' not in s and '${' not in s, repr(s)
    return '`' + s + '`'


def indent_block(text, pad):
    return '\n'.join(pad + line if line else line for line in text.split('\n'))


def emit_module(mid):
    src_path = os.path.join(SRC, f't{mid}-content.json')
    out_path = os.path.join(OUT, f't{mid}.ts')
    mod = norm_lat(json.load(open(src_path)))
    assert mod['module_number'] == mid, f"module_number mismatch in {src_path}"
    lessons_ts = []
    for lesson in mod['lessons']:
        ln = lesson['lesson_number']
        exercises = lesson['exercises']
        questions_ts = []
        for i, ex in enumerate(exercises):
            is_last = i == len(exercises) - 1
            payload_json = json.dumps(ex['payload'], indent=2, ensure_ascii=False)
            payload_json = indent_block(payload_json, '          ').lstrip()
            extra = ''
            if is_last:
                extra = (
                    f"          latin_tag: {tl(lesson['tag'])},\n"
                    f"          doctrine_line: {tl(lesson['closing_doctrine_line'])},\n"
                    f"          lesson_complete: true,\n"
                )
            questions_ts.append(
                f"        {{\n"
                f"          id: {tl(ex['id'])},\n"
                f"          type: {json.dumps(ex['type'])},\n"
                f"          stem: {tl(ex['stem'])},\n"
                f"{extra}"
                f"          payload: {payload_json},\n"
                f"        }}"
            )
        fin = lesson['fin']
        fin_tag = fin.get('tag') or lesson['tag']
        # Optional distinction block (RD4 fin reward stage).
        dist_ts = ''
        if fin.get('distinction'):
            d = fin['distinction']
            # motif is optional: some theology cards ship without one.
            motif_ts = f"          motif: {tl(d['motif'])},\n" if d.get('motif') else ''
            dist_ts = (
                f"        distinction: {{\n"
                f"          latin: {tl(d['latin'])},\n"
                f"          english: {tl(d['english'])},\n"
                f"          gloss: {tl(d['gloss'])},\n"
                f"{motif_ts}"
                f"        }},\n"
            )
        lessons_ts.append(
            f"    {{\n"
            f"      id: {tl(lesson['id'])},\n"
            f"      num: {tl(ROMAN[ln])},\n"
            f"      title: {tl(lesson['title'])},\n"
            f"      latin: {tl(lesson['tag'])},\n"
            f"      tag: {tl(lesson['tag'])},\n"
            f"      fin: {{\n"
            f"        tag: {tl(fin_tag)},\n"
            f"        heading: {tl(fin['heading'])},\n"
            f"        body: {tl(fin['body'])},\n"
            f"{dist_ts}"
            f"      }},\n"
            f"      questions: [\n" + ',\n'.join(questions_ts) + "\n      ],\n"
            f"    }}"
        )
    header = (
        f"/** T{mid} · {mod['title']}. Wired into the live app by "
        f"scholastica-claude-code-wing-parity-RUN.md (WP-A). Content is the "
        f"authored t{mid}-content.json, copied faithfully; no prose edits. */\n"
    )
    out = (
        "import type { ModuleMeta } from '../types';\n\n"
        + header +
        f"export const t{mid}: ModuleMeta = {{\n"
        f"  id: {mid},\n"
        f"  title: {tl(mod['title'])},\n"
        f"  short: {tl(mod['latin_title'])},\n"
        f"  label: {tl('Theologia ' + ROMAN[mid] + ' · ' + mod['title'])},\n"
        f"  latin: {tl(mod['latin_title'])},\n"
        f"  aim: {tl(mod['core_principle'])},\n"
        f"  lessons: [\n" + ',\n'.join(lessons_ts) + "\n  ],\n"
        "};\n"
    )
    if '—' in out:
        n = out.count('—')
        emdash_report.append((f't{mid}', n))
    assert '<lat>' not in out, 'unnormalized <lat>'
    with open(out_path, 'w') as f:
        f.write(out)
    print(f"t{mid}.ts: {len(mod['lessons'])} lessons, "
          f"{sum(len(l['exercises']) for l in mod['lessons'])} questions")


for mid in MODULES:
    emit_module(mid)

if emdash_report:
    print("\n⚠ EM-DASH found (flag to R2, do not auto-fix here):")
    for name, n in emdash_report:
        print(f"  {name}: {n}")
else:
    print("\nem-dash grep clean across all emitted modules.")
