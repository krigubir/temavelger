import { State } from '../reducer';

export const addColorScale = (
  state: State,
  payload: { altColorNumber: number; colorScale: string[] },
): State => {
  return { ...state, colorScales: [...state.colorScales, payload] };
};
