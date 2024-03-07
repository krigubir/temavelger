import { State } from '../../contexts/ReducerContext';

export const updateButtonSecondData = (
  state: State,
  payload: { buttonSecondColorScale: string[]; chosenColorIndex: number },
) => {
  return {
    ...state,
    buttonSecondData: {
      actionColorScale: payload.buttonSecondColorScale,
      chosenColorIndex: payload.chosenColorIndex,
    },
  };
};
