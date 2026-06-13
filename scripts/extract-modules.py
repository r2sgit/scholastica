#!/usr/bin/env python3
"""One-shot extraction: ../m{1,2}-content.json -> content/modules/m{1,2}.ts.

Follows the m0/m5/m12 file conventions:
  - module header fields in template literals
  - question payloads as JSON (double-quoted keys), matching m12 style
  - last question of each lesson carries latin_tag / doctrine_line / lesson_complete
  - <lat>...</lat> normalized to <span class="lat">...</span>
Content is copied verbatim otherwise -- no copy edits.
"""
import json
import os
import re
import sys

ROOT = os.path.dirname(os.path.dirname(os.path.abspath(__file__)))
ROMAN = {1: 'I', 2: 'II', 3: 'III', 4: 'IV', 5: 'V', 6: 'VI', 7: 'VII'}


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
    assert '`' not in s and '${' not in s, s
    return '`' + s + '`'


def indent_block(text, pad):
    return '\n'.join(pad + line if line else line for line in text.split('\n'))


def emit_module(src_path, out_path, var, short):
    mod = norm_lat(json.load(open(src_path)))
    mid = mod['module_number']
    lessons_ts = []
    for lesson in mod['lessons']:
        ln = lesson['lesson_number']
        questions_ts = []
        for i, ex in enumerate(lesson['exercises']):
            is_last = i == len(lesson['exercises']) - 1
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
        # m1-l3's fin carries no tag of its own; fall back to the lesson tag
        fin_tag = fin.get('tag') or lesson['tag']
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
            f"      }},\n"
            f"      questions: [\n" + ',\n'.join(questions_ts) + "\n      ],\n"
            f"    }}"
        )
    out = (
        "import type { ModuleMeta } from '../types';\n\n"
        f"export const {var}: ModuleMeta = {{\n"
        f"  id: {mid},\n"
        f"  title: {tl(mod['title'])},\n"
        f"  short: {tl(short)},\n"
        f"  label: {tl('Module ' + str(mid) + ' · ' + mod['title'])},\n"
        f"  latin: {tl(mod['latin_title'])},\n"
        f"  aim: {tl(mod['core_principle'])},\n"
        f"  lessons: [\n" + ',\n'.join(lessons_ts) + "\n  ],\n"
        "};\n"
    )
    assert '—' not in out, 'em dash introduced'
    assert '<lat>' not in out, 'unnormalized <lat>'
    with open(out_path, 'w') as f:
        f.write(out)
    print(f"{out_path}: {len(mod['lessons'])} lessons, "
          f"{sum(len(l['exercises']) for l in mod['lessons'])} questions")


emit_module(os.path.join(ROOT, '..', 'm1-content.json'),
            os.path.join(ROOT, 'content', 'modules', 'm1.ts'), 'm1', 'Act and Potency')
emit_module(os.path.join(ROOT, '..', 'm2-content.json'),
            os.path.join(ROOT, 'content', 'modules', 'm2.ts'), 'm2', 'Being and Essence')
emit_module(os.path.join(ROOT, '..', 'm17-content.json'),
            os.path.join(ROOT, 'content', 'modules', 'm17.ts'), 'm17', 'Existential Thomism')
