import type { State } from '../reducer';

export const resetSurfaceColorData = (
  state: State,
  payload: { altColorNumber: number },
): State => {
  const { altColorNumber } = payload;

  const newSurfaceColorData = state.surfaceColorData.filter(
    (color) => color.altColorNumber !== altColorNumber,
  );

  return {
    ...state,
    surfaceColorData: newSurfaceColorData,
  };
};
