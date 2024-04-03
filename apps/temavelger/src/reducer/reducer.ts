import type { State, Action } from '../contexts/ReducerContext';

import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  RESET_ALL_COLOR_PICKER_DATA,
  RESET_ALL_SURFACE_COLOR_DATA,
  RESET_BORDER_RADIUS_DATA,
  RESET_BUTTON_FIRST_DATA,
  RESET_BUTTON_SECOND_DATA,
  RESET_FONT_FAMILY_DATA,
  RESET_FORM_ELEMENTS_DATA,
  RESET_SURFACE_COLOR_DATA,
  UPDATE_BORDER_RADIUS_DATA,
  UPDATE_BUTTON_FIRST_DATA,
  UPDATE_BUTTON_SECOND_DATA,
  UPDATE_COLOR_PICKER_DATA,
  UPDATE_FONT_COLOR_DATA,
  UPDATE_FONT_FAMILY_DATA,
  UPDATE_FORM_ELEMENTS_DATA,
  UPDATE_SURFACE_COLOR_DATA,
} from './actions';
import { addColorPicker } from './reducerFunctions/addColorPicker';
import { removeColorPicker } from './reducerFunctions/removerColorPicker';
import { updateBorderRadiusData } from './reducerFunctions/updateBorderRadiusData';
import { updateButtonFirstData } from './reducerFunctions/updateButtonFirstData';
import { updateButtonSecondData } from './reducerFunctions/updateButtonSecondData';
import { updateFormElementsData } from './reducerFunctions/updateFormElementsData';
import { updateFontFamilyData } from './reducerFunctions/updateFontFamilyData';
import { updateColorPickerData } from './reducerFunctions/updateColorPickerData';
import { resetAllColorPickerData } from './reducerFunctions/resetAllColorPickerData';
import { resetBorderRadiusData } from './reducerFunctions/resetBorderRadiusData';
import { resetButtonFirstData } from './reducerFunctions/resetButtonFirstData';
import { resetButtonSecondData } from './reducerFunctions/resetButtonSecondData';
import { resetFontFamilyData } from './reducerFunctions/resetFontFamilyData';
import { resetFormElementsData } from './reducerFunctions/resetFormElementsData';
import { updateSurfaceColorData } from './reducerFunctions/updateSurfaceColorData';
import { resetAllSurfaceColorData } from './reducerFunctions/resetAllSurfaceColorData';
import { resetSurfaceColorData } from './reducerFunctions/resetSurfaceColorData';
import { updateFontColorData } from './reducerFunctions/updateFontColorData';
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

  if (action.type === UPDATE_SURFACE_COLOR_DATA) {
    return updateSurfaceColorData(
      state,
      action.payload as {
        chosenColorIndex: number;
        altColorNumber: number;
      },
    );
  }

  if (action.type === RESET_ALL_SURFACE_COLOR_DATA) {
    return resetAllSurfaceColorData(state);
  }

  if (action.type === RESET_SURFACE_COLOR_DATA) {
    return resetSurfaceColorData(
      state,
      action.payload as { altColorNumber: number },
    );
  }

  if (action.type === RESET_ALL_COLOR_PICKER_DATA) {
    return resetAllColorPickerData(state);
  }

  if (action.type === UPDATE_FONT_COLOR_DATA) {
    console.log('reducer', action.payload);
    return updateFontColorData(state, action.payload as string);
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

  if (action.type === RESET_BUTTON_FIRST_DATA) {
    return resetButtonFirstData(state);
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

  if (action.type === RESET_BUTTON_SECOND_DATA) {
    return resetButtonSecondData(state);
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

  if (action.type === RESET_FORM_ELEMENTS_DATA) {
    return resetFormElementsData(state);
  }

  if (action.type === UPDATE_BORDER_RADIUS_DATA) {
    return updateBorderRadiusData(
      state,
      action.payload as {
        borderRadiusValue: number;
      },
    );
  }

  if (action.type === RESET_BORDER_RADIUS_DATA) {
    return resetBorderRadiusData(state);
  }

  if (action.type === UPDATE_FONT_FAMILY_DATA) {
    return updateFontFamilyData(
      state,
      action.payload as {
        fontFamily: string;
      },
    );
  }

  if (action.type === RESET_FONT_FAMILY_DATA) {
    return resetFontFamilyData(state);
  }
  return state;
};

export default reducer;
