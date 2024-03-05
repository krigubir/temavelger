import { ColorPicker } from '../components/ColorPicker/ColorPicker';
import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  REMOVE_COLOR_SCALE,
  UPDATE_COLOR_SCALE,
} from './actions';
import { addColorPicker } from './reducerFunctions/addColorPicker';
import { removeColorScale } from './reducerFunctions/removeColorScale';
import { removeColorPicker } from './reducerFunctions/removerColorPicker';
import { updateColorScale } from './reducerFunctions/updateColorScale';

interface ColorScale {
  altColorNumber: number;
  colorScale: string[];
}

export type State = {
  colorPickerList: ColorPicker[];
  colorScales: ColorScale[];
  buttonColorScale: string[];
};

export type Action = {
  type: string;
  payload?: unknown;
};

const reducer = (state: State, action: Action): State => {
  if (action.type === ADD_COLOR_PICKER) {
    return addColorPicker(state);
  }

  if (action.type === REMOVE_COLOR_PICKER) {
    return removeColorPicker(state, action.payload as number);
  }

  if (action.type === UPDATE_COLOR_SCALE) {
    return updateColorScale(
      state,
      action.payload as { altColorNumber: number; colorScale: string[] },
    );
  }

  if (action.type === REMOVE_COLOR_SCALE) {
    return removeColorScale(state, action.payload as number);
  }

  // if (action.type === ADD_BUTTON_COLOR_SCALE) {
  //   return addButtonColorScale(state, action.payload as string);
  // }

  return state;
};

export default reducer;
