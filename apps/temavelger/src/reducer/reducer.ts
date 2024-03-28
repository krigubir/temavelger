import type { State, Action } from '../contexts/ReducerContext';

import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  UPDATE_BORDER_RADIUS_DATA,
  UPDATE_BUTTON_FIRST_DATA,
  UPDATE_BUTTON_SECOND_DATA,
  UPDATE_COLOR_PICKER_DATA,
  UPDATE_FONT_FAMILY_DATA,
  UPDATE_FORM_ELEMENTS_DATA,
} from './actions';
import { addColorPicker } from './reducerFunctions/addColorPicker';
import { removeColorPicker } from './reducerFunctions/removerColorPicker';
import { updateBorderRadiusData } from './reducerFunctions/updateBorderRadiusData';
import { updateButtonFirstData } from './reducerFunctions/updateButtonFirstData';
import { updateButtonSecondData } from './reducerFunctions/updateButtonSecondData';
import { updateFormElementsData } from './reducerFunctions/updateFormElementsData';
import { updateFontFamilyData } from './reducerFunctions/updateFontFamilyData';
import { updateColorPickerData } from './reducerFunctions/updateColorPickerData';
export type { State };

/*
  Receives an action message and executes the corresponding function
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

  if (action.type === UPDATE_COLOR_PICKER_DATA) {
    return updateColorPickerData(
      state,
      action.payload as { altColorNumber: number; colorScale: string[] },
    );
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

  if (action.type === UPDATE_BORDER_RADIUS_DATA) {
    return updateBorderRadiusData(
      state,
      action.payload as {
        borderRadiusValue: number;
      },
    );
  }

  if (action.type === UPDATE_FONT_FAMILY_DATA) {
    return updateFontFamilyData(
      state,
      action.payload as {
        fontFamily: string;
      },
    );
  }
  return state;
};

export default reducer;
