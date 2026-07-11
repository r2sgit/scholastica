// content/theologia/index.ts
import { t1 } from './t1';
import { t2 } from './t2';
import { t5 } from './t5';
import { t9 } from './t9';
import { t12 } from './t12';
import type { ModuleMeta } from '../types';

export const THEOLOGIA_MODULES: ModuleMeta[] = [t1, t2, t5, t9, t12];

export function getTheologiaModule(id: number): ModuleMeta | undefined {
  return THEOLOGIA_MODULES.find(m => m.id === id);
}
