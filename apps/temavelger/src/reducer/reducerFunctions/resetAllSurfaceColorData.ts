import type { State } from '../reducer'; // Import the missing type 'SurfaceColor' from the external module.

export const resetAllSurfaceColorData = (state: State): State => {
  // Use the imported type 'ActionColorData' in the function signature.
  const { surfaceColorData } = state;
  if (surfaceColorData.length === 0) return state;

  return {
    ...state,
    surfaceColorData: [],
  };
};
