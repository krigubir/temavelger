import type { State } from '../reducer';

export const resetFormElementsData = (state: State): State => {
  return {
    ...state,
    formElementsData: { chosenColorIndex: 0, actionColorScale: [] },
  };
};
