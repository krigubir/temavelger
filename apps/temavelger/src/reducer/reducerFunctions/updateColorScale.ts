import type { State } from '../reducer';

export const updateColorScale = (
  state: State,
  payload: { altColorNumber: number; colorScale: string[] },
): State => {
  const existingColorScale = state.colorScales.find(
    (colorScale) => colorScale.altColorNumber === payload.altColorNumber,
  );

  if (existingColorScale) {
    const newColorScales = state.colorScales.map((prevColorScale) =>
      prevColorScale.altColorNumber === payload.altColorNumber
        ? { ...prevColorScale, colorScale: payload.colorScale }
        : prevColorScale,
    );
    return { ...state, colorScales: newColorScales };
  }

  return { ...state, colorScales: [...state.colorScales, payload] };
};
