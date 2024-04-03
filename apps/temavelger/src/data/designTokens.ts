/*
  This file keeps track of the design tokens and their 
  corresponding values used in the application

  The design tokens are mapped to a color in the color scale
  and are used in DOM manipulation and in the state of the application

  This is the place to add new design tokens and their corresponding colors
  This is the one source of truth for which design tokens are used in the application
*/

export const getColorPickerBrandTokens = (
  altColorNumber: number,
  colorNuance: number,
): { brandColor: string } => {
  return {
    brandColor: `--fds-brand-alt${altColorNumber}-${(colorNuance + 1) * 100}`,
  };
};

export const getSurfaceFirstColorTokens = (
  chosenColorIndex: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-surface-first-light': chosenColorIndex,
    '--fds-semantic-surface-first-light-hover':
      chosenColorIndex + 1 < 8 ? chosenColorIndex + 1 : chosenColorIndex - 1,
  };
};

export const getSurfaceSecondColorTokens = (
  chosenColorIndex: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-surface-second-light': chosenColorIndex,
    '--fds-semantic-surface-second-light-hover':
      chosenColorIndex + 1 < 8 ? chosenColorIndex + 1 : chosenColorIndex - 1,
  };
};

export const getSurfaceThirdColorTokens = (
  chosenColorIndex: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-surface-third-light': chosenColorIndex,
    '--fds-semantic-surface-third-light-hover':
      chosenColorIndex + 1 < 8 ? chosenColorIndex + 1 : chosenColorIndex - 1,
  };
};

export const getButtonFirstTokens = (
  chosenColorIndex: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-surface-action-first-default': chosenColorIndex,
    '--fds-semantic-surface-action-first-hover':
      chosenColorIndex + 1 < 8 ? chosenColorIndex + 1 : chosenColorIndex - 1,
    '--fds-semantic-surface-action-first-active':
      chosenColorIndex + 2 < 8 ? chosenColorIndex + 2 : chosenColorIndex - 2,
    '--fds-semantic-surface-action-first-no_fill-hover': 0,
    '--fds-semantic-surface-action-first-no_fill-active': 2,
    '--fds-semantic-text-action-first-default': 5,
    '--fds-semantic-text-action-first-hover': 6,
    '--fds-semantic-text-action-first-active': 7,
    '--fds-semantic-border-action-first-default': chosenColorIndex,
    '--fds-semantic-border-action-first-hover': 7,
    '--fds-semantic-border-action-first-active': 8,
  };
};

export const getButtonSecondTokens = (
  chosenColorIndex: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-surface-action-second-default': chosenColorIndex,
    '--fds-semantic-surface-action-second-hover':
      chosenColorIndex + 1 < 8 ? chosenColorIndex + 1 : chosenColorIndex - 1,
    '--fds-semantic-surface-action-second-active':
      chosenColorIndex + 2 < 8 ? chosenColorIndex + 2 : chosenColorIndex - 2,
    '--fds-semantic-surface-action-second-no_fill-hover': 0,
    '--fds-semantic-surface-action-second-no_fill-active': 2,
    '--fds-semantic-text-action-second-default': 5,
    '--fds-semantic-text-action-second-hover': 6,
    '--fds-semantic-text-action-second-active': 7,
    '--fds-semantic-border-action-second-default': chosenColorIndex,
    '--fds-semantic-border-action-second-hover': 7,
    '--fds-semantic-border-action-second-active': 8,
  };
};

export const getFormElementTokens = (
  chosenColorIndex: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-border-input-hover': chosenColorIndex,
    '--fds-semantic-border-input-default': 8,
    '--fds-semantic-text-action-hover': chosenColorIndex,
    '--fds-semantic-surface-info-subtle-hover': 1,
  };
};

export const getBorderRadiusTokens = (): string[] => {
  return [
    '--fds-border_radius-small',
    '--fds-border_radius-medium',
    '--fds-border_radius-large',
    '--fds-border_radius-xlarge',
    '--fds-border_radius-xxlarge',
    '--fds-border_radius-xxxlarge',
    '--fds-border_radius-xxxxlarge',
    '--fds-border_radius-interactive',
  ];
};
