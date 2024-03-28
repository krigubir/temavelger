import type { State } from '../reducer';

export const updateColorPickerData = (
  state: State,
  payload: { altColorNumber: number; colorScale: string[] },
) => {
  const newColorPickerList = state.colorPickerList.map((colorPicker) => {
    if (colorPicker.altColorNumber === payload.altColorNumber) {
      return {
        ...colorPicker,
        colorScale: payload.colorScale,
      };
    }
    return colorPicker;
  });

  return {
    ...state,
    colorPickerList: newColorPickerList,
  };
};
