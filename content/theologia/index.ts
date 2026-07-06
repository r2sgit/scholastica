// content/theologia/index.ts
import { t1 } from './t1';
import type { ModuleMeta } from '../types';

export const THEOLOGIA_MODULES: ModuleMeta[] = [t1];

export function getTheologiaModule(id: number): ModuleMeta | undefined {
  return THEOLOGIA_MODULES.find(m => m.id === id);
}
