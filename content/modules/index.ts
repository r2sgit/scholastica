// content/modules/index.ts
import { m0 }  from './m0';
import { m1 }  from './m1';
import { m2 }  from './m2';
import { m5 }  from './m5';
import { m12 } from './m12';
import { m17 } from './m17';
import type { ModuleMeta } from '../types';

export const MODULES: ModuleMeta[] = [m0, m1, m2, m5, m12, m17];

export function getModule(id: number): ModuleMeta | undefined {
  return MODULES.find(m => m.id === id);
}
