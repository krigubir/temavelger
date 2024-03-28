import type { State } from '../reducer';

export const removeColorPicker = (
  state: State,
  altColorNumber: number,
): State => {
  const newColorPickerList = state.colorPickerList.filter(
    (colorPicker) => colorPicker.altColorNumber !== altColorNumber,
  );

  let newAltColorNumber = 1;
  newColorPickerList.forEach((colorPicker) => {
    colorPicker.altColorNumber = newAltColorNumber;
    newAltColorNumber++;
  });

  console.log(newColorPickerList);
  return {
    ...state,
    colorPickerList: newColorPickerList,
  };
};
