import type { State } from '../reducer';

export const updateFontColorData = (state: State, color: string): State => {
  if (color === '#1e2b3c') {
    return { ...state, fontColor: '' };
  }
  return { ...state, fontColor: '#ffffff' };
};
