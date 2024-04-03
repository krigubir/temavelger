import type { State } from '../reducer';

export const updateFontFamilyData = (
  state: State,
  payload: {
    fontFamily: string;
  },
): State => {
  return {
    ...state,
    fontFamilyData: payload.fontFamily,
  };
};
