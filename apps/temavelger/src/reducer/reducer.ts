import { ColorPicker } from '../components/ColorPicker/ColorPicker';
import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  REMOVE_COLOR_SCALE,
  UPDATE_BUTTON_FIRST_COLOR_SCALE,
  UPDATE_COLOR_SCALE,
} from './actions';
import { addColorPicker } from './reducerFunctions/addColorPicker';
import { removeColorScale } from './reducerFunctions/removeColorScale';
import { removeColorPicker } from './reducerFunctions/removerColorPicker';
import { updateButtonFirstData } from './reducerFunctions/updateButtonFirstData';
import { updateColorScale } from './reducerFunctions/updateColorScale';

/*
  This is the reducer function
  @param state
  @param action
  @returns state
*/

interface ColorScale {
  altColorNumber: number;
  colorScale: string[];
}

interface ButtonColorData {
  chosenColorIndex: number;
  buttonFirstColorScale: string[];
}

export type State = {
  colorPickerList: ColorPicker[];
  colorScales: ColorScale[];
  buttonFirstData: ButtonColorData;
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

  if (action.type === UPDATE_BUTTON_FIRST_COLOR_SCALE) {
    console.log(
      'reducer: ' +
        (action.payload as { chosenColorIndex: number }).chosenColorIndex,
    );
    return updateButtonFirstData(
      state,
      action.payload as {
        buttonFirstColorScale: string[];
        chosenColorIndex: number;
      },
    );
  }

  return state;
};

export default reducer;
