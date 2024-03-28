import type { State } from '../reducer';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';

export const addColorPicker = (state: State): State => {
  const newColorPicker = {
    colorScale: generateColorScaleHSL('#919191', 9),
    altColorNumber: state.colorPickerList.length + 1,
    removable: true,
  };

  const newColorPickerList = [...state.colorPickerList, newColorPicker];

  console.log(newColorPickerList);
  return {
    ...state,
    colorPickerList: newColorPickerList,
  };
};
