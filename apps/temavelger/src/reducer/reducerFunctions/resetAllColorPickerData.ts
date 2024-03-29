import type { ColorPicker } from '../../components/ColorPicker/ColorPicker';
import colorPickerData from '../../data/colorPickerData';
import type { State } from '../reducer';

export const resetAllColorPickerData = (state: State): State => {
  const defaultColorPickerData: ColorPicker[] = colorPickerData;
  return { ...state, colorPickerList: defaultColorPickerData };
};
