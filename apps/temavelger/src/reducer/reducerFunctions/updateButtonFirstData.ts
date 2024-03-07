import { State } from '../reducer';

/*
  This function updates the button color scale in the state
  @param state - the state of the application
  @param payload - color and colorNuanceIndex
  @returns state
*/

export const updateButtonFirstData = (
  state: State,
  payload: { buttonFirstColorScale: string[]; chosenColorIndex: number },
) => {
  console.log('updateButtonFirstData: ' + payload.chosenColorIndex);
  return {
    ...state,
    buttonFirstData: {
      buttonFirstColorScale: payload.buttonFirstColorScale,
      chosenColorIndex: payload.chosenColorIndex,
    },
  };
};
