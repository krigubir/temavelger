import { ColorPicker } from '../components/ColorPicker/ColorPicker';
import generateColorScaleHSL from '../utils/generateColorScaleHSL';
import { ADD_COLOR_PICKER, REMOVE_COLOR_PICKER } from './actions';

type State = {
  colorPickerList: ColorPicker[];
};

type Action = {
  type: string;
  payload?: unknown;
};

const reducer = (state: State, action: Action): State => {
  if (action.type === ADD_COLOR_PICKER) {
    const newColorPicker = {
      token: '',
      colorScale: generateColorScaleHSL('#919191', 9),
      altColorNumber:
        state.colorPickerList[state.colorPickerList.length - 1].altColorNumber +
        1,
      removable: true,
    };

    const colorPickerList = [...state.colorPickerList, newColorPicker];
    return {
      ...state,
      colorPickerList: colorPickerList,
    };
  }

  if (action.type === REMOVE_COLOR_PICKER) {
    const altColorNumber = action.payload as number;
    const colorPickerList = state.colorPickerList.filter(
      (colorPicker) => colorPicker.altColorNumber !== altColorNumber,
    );

    return {
      ...state,
      colorPickerList: colorPickerList,
    };
  }

  return state;
};

export default reducer;
