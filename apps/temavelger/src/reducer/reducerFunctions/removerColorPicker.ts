import { State } from '../reducer';

export const removeColorPicker = (
  state: State,
  altColorNumber: number,
): State => {
  const colorPickerList = state.colorPickerList.filter(
    (colorPicker) => colorPicker.altColorNumber !== altColorNumber,
  );

  return {
    ...state,
    colorPickerList: colorPickerList,
  };
};
