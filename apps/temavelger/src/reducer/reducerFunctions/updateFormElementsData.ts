import type { State } from '../../contexts/ReducerContext';

export const updateFormElementsData = (
  state: State,
  payload: {
    formElementsColorScale: string[];
    chosenColorIndex: number;
  },
) => {
  return {
    ...state,
    formElementsData: {
      actionColorScale: payload.formElementsColorScale,
      chosenColorIndex: payload.chosenColorIndex,
    },
  };
};
