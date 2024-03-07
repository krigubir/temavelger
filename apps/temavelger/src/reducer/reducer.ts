import { State, Action } from '../contexts/ReducerContext';
import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  REMOVE_COLOR_SCALE,
  UPDATE_BUTTON_FIRST_DATA,
  UPDATE_BUTTON_SECOND_DATA,
  UPDATE_COLOR_SCALE,
  UPDATE_FORM_ELEMENTS_DATA,
} from './actions';
import { addColorPicker } from './reducerFunctions/addColorPicker';
import { removeColorScale } from './reducerFunctions/removeColorScale';
import { removeColorPicker } from './reducerFunctions/removerColorPicker';
import { updateButtonFirstData } from './reducerFunctions/updateButtonFirstData';
import { updateButtonSecondData } from './reducerFunctions/updateButtonSecondData';
import { updateColorScale } from './reducerFunctions/updateColorScale';
import { updateFormElementsData } from './reducerFunctions/updateFormElementsData';

/*
  This is the reducer function
  @param state
  @param action
  @returns state
*/

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

  if (action.type === UPDATE_BUTTON_FIRST_DATA) {
    return updateButtonFirstData(
      state,
      action.payload as {
        buttonFirstColorScale: string[];
        chosenColorIndex: number;
      },
    );
  }

  if (action.type === UPDATE_BUTTON_SECOND_DATA) {
    return updateButtonSecondData(
      state,
      action.payload as {
        buttonSecondColorScale: string[];
        chosenColorIndex: number;
      },
    );
  }

  if (action.type === UPDATE_FORM_ELEMENTS_DATA) {
    return updateFormElementsData(
      state,
      action.payload as {
        formElementsColorScale: string[];
        chosenColorIndex: number;
      },
    );
  }

  return state;
};

export default reducer;
