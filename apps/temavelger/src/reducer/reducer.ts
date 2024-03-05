import { ColorPicker } from '../components/ColorPicker/ColorPicker';
import {
  ADD_COLOR_PICKER,
  ADD_COLOR_SCALE,
  REMOVE_COLOR_PICKER,
  UPDATE_COLOR_SCALE,
} from './actions';
import { addColorPicker } from './reducerFunctions/addColorPicker';
import { addColorScale } from './reducerFunctions/addColorScale';
import { removeColorPicker } from './reducerFunctions/removerColorPicker';
import { updateColorScale } from './reducerFunctions/updateColorScale';

interface ColorScale {
  altColorNumber: number;
  colorScale: string[];
}

export type State = {
  colorPickerList: ColorPicker[];
  colorScales: ColorScale[];
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

  if (action.type === ADD_COLOR_SCALE) {
    console.log(state);
    return addColorScale(
      state,
      action.payload as { altColorNumber: number; colorScale: string[] },
    );
  }

  if (action.type === UPDATE_COLOR_SCALE) {
    return updateColorScale(
      state,
      action.payload as { altColorNumber: number; colorScale: string[] },
    );
  }

  return state;
};

export default reducer;
