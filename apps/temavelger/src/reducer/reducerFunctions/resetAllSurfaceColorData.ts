import type { State } from '../reducer';

export const resetAllSurfaceColorData = (state: State): State => {
  const { surfaceColorData } = state;
  if (surfaceColorData.length === 0) return state;

  return {
    ...state,
    surfaceColorData: [],
  };
};
