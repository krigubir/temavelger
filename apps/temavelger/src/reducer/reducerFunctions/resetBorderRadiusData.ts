import type { State } from '../reducer';

export const resetBorderRadiusData = (state: State): State => {
  return {
    ...state,
    borderRadiusData: 0,
  };
};
