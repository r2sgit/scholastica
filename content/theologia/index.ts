// content/theologia/index.ts
import { t1 } from './t1';
import { t2 } from './t2';
import { t3 } from './t3';
import { t4 } from './t4';
import { t5 } from './t5';
import { t8 } from './t8';
import { t9 } from './t9';
import { t10 } from './t10';
import { t11 } from './t11';
import { t12 } from './t12';
import { t13 } from './t13';
import { t14 } from './t14';
import type { ModuleMeta } from '../types';

export const THEOLOGIA_MODULES: ModuleMeta[] = [t1, t2, t3, t4, t5, t8, t9, t10, t11, t12, t13, t14];

export function getTheologiaModule(id: number): ModuleMeta | undefined {
  return THEOLOGIA_MODULES.find(m => m.id === id);
}
