import type { State } from '../contexts/ReducerContext';
import {
  getButtonFirstTokens,
  getButtonSecondTokens,
  getFormElementTokens,
} from '../data/designTokens';

/*
  This function updates the action-color tokens in the DOM
  @param chosenColorIndex - index of the selected color in the color scale
  @param altColorNumber - index of the selected color scale in the state
  @param state - the state of the application
 */

export const updateButtonFirstColorTokens = (
  chosenColorIndex: number,
  altColorNumber: number,
  state: State,
) => {
  const tokenList = getButtonFirstTokens(chosenColorIndex);
  for (const token in tokenList) {
    if (tokenList[token] > 7) {
      document.documentElement.style.setProperty(
        token,
        state.colorScales[altColorNumber].colorScale[7],
      );
      continue;
    }
    document.documentElement.style.setProperty(
      token,
      state.colorScales[altColorNumber].colorScale[tokenList[token]],
    );
  }
};

export const updateButtonSecondColorTokens = (
  chosenColorIndex: number,
  altColorNumber: number,
  state: State,
) => {
  const tokenList = getButtonSecondTokens(chosenColorIndex);
  for (const token in tokenList) {
    if (tokenList[token] > 7) {
      document.documentElement.style.setProperty(
        token,
        state.colorScales[altColorNumber].colorScale[7],
      );
      continue;
    }
    document.documentElement.style.setProperty(
      token,
      state.colorScales[altColorNumber].colorScale[tokenList[token]],
    );
  }
};

export const updateFormElementColorTokens = (
  chosenColorIndex: number,
  altColorNumber: number,
  state: State,
) => {
  const tokenList = getFormElementTokens(chosenColorIndex);
  for (const token in tokenList) {
    document.documentElement.style.setProperty(
      token,
      state.colorScales[altColorNumber].colorScale[tokenList[token]],
    );
  }
};
