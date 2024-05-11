import type { ColorPicker } from '../../components/DesignMenuTools/ColorPicker/ColorPicker';
import { colorPickerData } from '../../data/defaultStateData';
import type { State } from '../reducer';

export const resetAllColorPickerData = (state: State): State => {
  const defaultColorPickerData: ColorPicker[] = colorPickerData;
  return { ...state, colorPickerList: defaultColorPickerData };
};
