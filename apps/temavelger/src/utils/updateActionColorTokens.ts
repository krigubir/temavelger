import { State } from '../reducer/reducer';

export const updateActionColorTokens = (
  variant: string,
  actionType: string,
  color: string,
  colorNuance: number,
  index: number,
  state: State,
) => {
  // button first
  if (
    variant.toLowerCase() === 'first' &&
    actionType.toLowerCase() === 'button'
  ) {
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-action-first-default',
      color,
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-action-first-hover',
      state.colorScales[index].colorScale[colorNuance + 1],
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-action-first-active',
      state.colorScales[index].colorScale[colorNuance + 3],
    );
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
      state.colorScales[index].colorScale[colorNuance + 1],
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-action-second-active',
      state.colorScales[index].colorScale[colorNuance + 3],
    );
  }

  // form elements
  if (variant == '' && actionType.toLowerCase() == 'form elements') {
    document.documentElement.style.setProperty(
      '--fds-semantic-border-input-hover', // inside the radio-group
      color,
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-border-input-default', // default radio circle
      state.colorScales[index].colorScale[8],
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-text-action-hover', // hover-text
      state.colorScales[index].colorScale[6],
    );
    document.documentElement.style.setProperty(
      '--fds-semantic-surface-info-subtle-hover', // outside the radio-group
      state.colorScales[index].colorScale[1],
    );
  }
};
