// content/modules/index.ts
import { m1 }  from './m1';
import { m2 }  from './m2';
import { m3 }  from './m3';
import { m4 }  from './m4';
import { m5 }  from './m5';
import { m6 }  from './m6';
import { m7 }  from './m7';
import { m8 }  from './m8';
import { m13 } from './m13';
import { m18 } from './m18';
import type { ModuleMeta } from '../types';

export const MODULES: ModuleMeta[] = [m1, m2, m3, m4, m5, m6, m7, m8, m13, m18];

export function getModule(id: number): ModuleMeta | undefined {
  return MODULES.find(m => m.id === id);
}
