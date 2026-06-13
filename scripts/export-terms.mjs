#!/usr/bin/env node
/**
 * export-terms.mjs — glossary → Vocabularium data (G3)
 *
 * Re-runnable. Parses ../scholastica-glossary.md (the master vocabulary
 * register) into content/terms-export.json for the Vocabularium shelf
 * and the <Term> tooltip foundation.
 *
 *   node scripts/export-terms.mjs [path-to-glossary.md] [out.json]
 *
 * Handles the glossary's three table shapes:
 *   A. Structural terms (3-col: Latin | English | Notes)        -> module "structural"
 *   B. Module 0 field blocks (### name: Lesson N + field table) -> module 0, lesson N
 *   C. Module 1+ tables (5-col: Latin | English | Definition | Precision note | Status)
 *
 * Run again after any glossary content pass; the file is generated, never
 * hand-edited. Em-dashes in glossary prose pass through untouched (the
 * glossary is already em-dash-free by its own rule).
 */

import { readFileSync, writeFileSync } from 'node:fs';
import { resolve, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const here = dirname(fileURLToPath(import.meta.url));
const glossaryPath = resolve(here, process.argv[2] ?? '../../scholastica-glossary.md');
const outPath = resolve(here, process.argv[3] ?? '../content/terms-export.json');

const src = readFileSync(glossaryPath, 'utf8');
const lines = src.split('\n');

const strip = (s) => s.replace(/\*+/g, '').trim();
const cells = (row) => row.split('|').slice(1, -1).map((c) => c.trim());
const isRow = (l) => /^\|.*\|\s*$/.test(l);
const isSep = (l) => /^\|[\s:-]+\|/.test(l) && /-/.test(l);

const terms = [];
let module_ = null; // 'structural' | number
let lesson = null;
let versionLine = (src.match(/\*\*Version:\*\*\s*(.+)/) || [])[1]?.trim() ?? 'unknown';

for (let i = 0; i < lines.length; i++) {
  const l = lines[i];

  const modH = l.match(/^## Module (\d+):/);
  if (modH) { module_ = Number(modH[1]); lesson = null; continue; }
  if (/^## Structural Terms/.test(l)) { module_ = 'structural'; lesson = null; continue; }
  if (/^## /.test(l) && !modH) {
    // Any other H2 (Purpose, Cross-reference, Alphabetical index) ends term scanning regions
    if (!/^## Module/.test(l)) { module_ = /Structural Terms/.test(l) ? 'structural' : null; }
    continue;
  }

  const lesH = l.match(/^### .*?:\s*Lesson (\d+)/);
  if (lesH) { lesson = Number(lesH[1]); continue; }

  if (module_ === null || !isRow(l) || isSep(l)) continue;

  const c = cells(l);

  // Shape B: Module 0 field blocks ( | **Latin** | *esse* / *essentia* | )
  if (c.length === 2 && /\*\*Latin\*\*/.test(c[0])) {
    const block = { latin: strip(c[1]), module: module_, lesson, status: 'built' };
    // Walk the following field rows of this block
    for (let j = i + 1; j < lines.length && isRow(lines[j]); j++) {
      const [k, v] = cells(lines[j]);
      if (!k || v === undefined) continue;
      if (/\*\*English\*\*/.test(k)) block.english = strip(v);
      else if (/\*\*Gloss/.test(k)) block.gloss = strip(v);
      else if (/\*\*Latin tag\*\*/.test(k)) block.latin_tag = v.trim();
      else if (/\*\*Opens door to\*\*/.test(k)) block.opens_door_to = strip(v);
      i = j;
    }
    if (block.english) terms.push(block);
    continue;
  }

  // Header rows for shapes A and C
  if (/^\|\s*Latin\s*\|/.test(l)) continue;

  // Shape A: structural 3-col
  if (module_ === 'structural' && c.length === 3) {
    const [latin, english, notes] = c;
    if (!latin) continue;
    terms.push({ latin: strip(latin), english: strip(english), gloss: notes.trim(), module: 'structural', status: 'built' });
    continue;
  }

  // Shape C: module 5-col (Latin | English | Definition | Precision note | Status)
  // Shape D: module 4-col (Latin | English | Definition | Status)
  if (typeof module_ === 'number' && (c.length === 5 || c.length === 4)) {
    const latin = c[0];
    if (!latin || /^Latin$/i.test(latin)) continue;
    const english = c[1];
    const def = c[2];
    const precision = c.length === 5 ? c[3] : null;
    const status = c[c.length - 1];
    terms.push({
      latin: strip(latin),
      english: strip(english),
      gloss: def.trim(),
      ...(precision ? { precision: precision.trim() } : {}),
      module: module_,
      ...(lesson !== null ? { lesson } : {}),
      status: status.includes('✅') ? 'built' : 'planned',
    });
    continue;
  }
}

const out = {
  meta: {
    source: 'scholastica-glossary.md',
    source_version: versionLine,
    generated: new Date().toISOString().slice(0, 10),
    generator: 'scripts/export-terms.mjs (re-runnable; do not hand-edit this file)',
    count: terms.length,
    accumulation_rule:
      'A term renders in the Vocabularium only once earned: its introducing module has at least one completed lesson. status:planned terms belong to unbuilt modules and never render until their module ships. module:"structural" terms are earned with M0 lesson 1 (the game grammar is met immediately).',
  },
  terms,
};

writeFileSync(outPath, JSON.stringify(out, null, 2) + '\n');
console.log(`terms-export.json: ${terms.length} terms -> ${outPath}`);
const byModule = {};
for (const t of terms) byModule[t.module] = (byModule[t.module] ?? 0) + 1;
console.log(Object.entries(byModule).map(([m, n]) => `M${m}:${n}`).join(' '));
