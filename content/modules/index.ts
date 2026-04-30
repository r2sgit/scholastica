// content/modules/index.ts
import { m0 }  from './m0';
import { m5 }  from './m5';
import { m12 } from './m12';
import type { ModuleMeta } from '../types';

export const MODULES: ModuleMeta[] = [m0, m5, m12];

export function getModule(id: number): ModuleMeta | undefined {
  return MODULES.find(m => m.id === id);
}
