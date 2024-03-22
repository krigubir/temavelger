import type { State } from '../reducer';

export const updateBorderRadiusData = (
  state: State,
  payload: { borderRadiusValue: number },
): State => {
  return {
    ...state,
    borderRadiusData: payload.borderRadiusValue,
  };
};
