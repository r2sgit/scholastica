// content/theologia/index.ts
import { t1 } from './t1';
import { t5 } from './t5';
import type { ModuleMeta } from '../types';

export const THEOLOGIA_MODULES: ModuleMeta[] = [t1, t5];

export function getTheologiaModule(id: number): ModuleMeta | undefined {
  return THEOLOGIA_MODULES.find(m => m.id === id);
}
