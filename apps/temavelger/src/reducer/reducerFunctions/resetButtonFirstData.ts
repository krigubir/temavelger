import type { State } from '../reducer';

export const resetButtonFirstData = (state: State): State => {
  return {
    ...state,
    buttonFirstData: { chosenColorIndex: 0, actionColorScale: [] },
  };
};
