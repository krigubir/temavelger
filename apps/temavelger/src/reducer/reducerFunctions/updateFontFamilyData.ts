import type { State } from '../reducer';

export const updateFontFamilyData = (
  state: State,
  payload: {
    fontFamily: string;
  },
): State => {
  console.log(payload.fontFamily);
  return {
    ...state,
    fontFamilyData: payload.fontFamily,
  };
};
