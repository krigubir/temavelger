import type { State } from '../reducer';

export const resetButtonSecondData = (state: State): State => {
  return {
    ...state,
    buttonSecondData: { chosenColorIndex: 0, actionColorScale: [] },
  };
};
