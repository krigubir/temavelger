import { State } from '../reducer';

export const updateButtonColorScale = (
  state: State,
  payload: { colorScale: string[] },
) => {
  return { ...state, buttonColorScale: payload.colorScale };
};
