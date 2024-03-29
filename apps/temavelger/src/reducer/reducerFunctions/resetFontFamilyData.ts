import type { State } from '../reducer';

export const resetFontFamilyData = (state: State): State => {
  return {
    ...state,
    fontFamilyData: '',
  };
};
