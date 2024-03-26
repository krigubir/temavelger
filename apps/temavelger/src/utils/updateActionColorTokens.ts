import { State } from '../contexts/ReducerContext';
import {
  getButtonFirstTokens,
  getButtonSecondTokens,
  getFormElementTokens,
} from '../data/designTokens';

/*
  This function updates the action-color tokens in the DOM
  @param variant - first or second
  @param actionType - button or form elements
  @param colorNuanceIndex - index of the selected color in the color scale
  @param altColorNumber - index of the selected color scale in the state
  @param state - the state of the application
 */

export const updateActionColorTokens = (
  variant: string,
  actionType: string,
  colorNuanceIndex: number,
  altColorNumber: number,
  state: State,
) => {
  // button first
  if (
    variant.toLowerCase() === 'first' &&
    actionType.toLowerCase() === 'button'
  ) {
    // tokensList contains design tokens and an index used to access the correct color in the state
    const tokenList = getButtonFirstTokens(colorNuanceIndex);
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
  }

  // button second
  if (
    variant.toLowerCase() === 'second' &&
    actionType.toLowerCase() === 'button'
  ) {
    const tokenList = getButtonSecondTokens(colorNuanceIndex);
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
  }

  // form elements
  if (variant == '' && actionType.toLowerCase() == 'form elements') {
    const tokenList = getFormElementTokens(colorNuanceIndex);
    for (const token in tokenList) {
      document.documentElement.style.setProperty(
        token,
        state.colorScales[altColorNumber].colorScale[tokenList[token]],
      );
    }
  }
};
