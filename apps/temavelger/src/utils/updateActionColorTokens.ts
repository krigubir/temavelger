import { State } from '../reducer/reducer';
import {
  getButtonFirstTokens,
  getFormElementTokens,
} from '../data/designTokens';

/*
  This function updates the action-color tokens in the DOM
  @param variant - first or second
  @param actionType - button or form elements
  @param color - selected color
  @param colorNuanceIndex - index of the selected color in the color scale
  @param altColorNumber - index of the selected color scale in the state
  @param state - the state of the application
 */

export const updateActionColorTokens = (
  variant: string,
  actionType: string,
  color: string,
  colorNuanceIndex: number,
  altColorNumber: number,
  state: State,
) => {
  // button first
  if (
    variant.toLowerCase() === 'first' &&
    actionType.toLowerCase() === 'button'
  ) {
    const tokenList = getButtonFirstTokens(colorNuanceIndex);
    for (const token in tokenList) {
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
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-action-second-default',
      color,
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-action-second-hover',
      state.colorScales[altColorNumber].colorScale[colorNuanceIndex + 1],
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-action-second-active',
      state.colorScales[altColorNumber].colorScale[colorNuanceIndex + 3],
    );
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
