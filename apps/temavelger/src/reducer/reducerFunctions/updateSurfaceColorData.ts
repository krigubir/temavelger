import type { State } from '../reducer';

export const updateSurfaceColorData = (
  state: State,
  payload: { chosenColorIndex: number; altColorNumber: number },
): State => {
  const { chosenColorIndex, altColorNumber } = payload;

  if (altColorNumber > 3) return state;

  for (let i = 0; i < state.surfaceColorData.length; i++) {
    if (state.surfaceColorData[i].altColorNumber === altColorNumber) {
      state.surfaceColorData[0] = { chosenColorIndex, altColorNumber };
      return { ...state };
    }
  }

  const newSurfaceColorData = [
    ...state.surfaceColorData,
    { chosenColorIndex, altColorNumber },
  ];

  return {
    ...state,
    surfaceColorData: newSurfaceColorData,
  };
};
