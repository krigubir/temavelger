import { State } from '../reducer';

export const removeColorScale = (
  state: State,
  altColorNumber: number,
): State => {
  const newColorScales = state.colorScales.filter(
    (colorScale) => colorScale.altColorNumber !== altColorNumber,
  );
  return { ...state, colorScales: newColorScales };
};
