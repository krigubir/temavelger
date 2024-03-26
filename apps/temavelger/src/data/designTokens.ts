/*
  This file keeps track of the design tokens and their 
  corresponding values used in the application

  The design tokens are mapped to a color in the color scale
  and are used in DOM manipulation and in the state of the application

  This is the place to add new design tokens and their corresponding colors
  This is the one source of truth for which design tokens are used in the application
*/

const altColorNumberMap = ['first', 'second', 'third'];

export const getColorPickerBrandTokens = (
  altColorNumber: number,
  colorNuance: number,
): { brandColor: string } => {
  return {
    brandColor: `--fds-brand-alt${altColorNumber}-${(colorNuance + 1) * 100}`,
  };
};

export const getColorPickerSemanticTokens = (
  altColorNumber: number,
): { surfaceColor: string; surfaceColorHover: string } => {
  return {
    surfaceColor: `--fds-semantic-surface-${
      altColorNumberMap[altColorNumber - 1]
    }-light`,
    surfaceColorHover: `--fds-semantic-surface-${
      altColorNumberMap[altColorNumber - 1]
    }-light-hover`,
  };
};

export const getButtonFirstTokens = (
  colorNuance: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-surface-action-first-default': colorNuance,
    '--fds-semantic-surface-action-first-hover': colorNuance + 1,
    '--fds-semantic-surface-action-first-active': colorNuance + 3,
    '--fds-semantic-surface-action-first-no_fill-hover': 0,
    '--fds-semantic-surface-action-first-no_fill-active': 2,
    '--fds-semantic-text-action-first-default': 5,
    '--fds-semantic-text-action-first-hover': 6,
    '--fds-semantic-text-action-first-active': 7,
  };
};

export const getButtonSecondTokens = (
  colorNuance: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-surface-action-second-default': colorNuance,
    '--fds-semantic-surface-action-second-hover': colorNuance + 1,
    '--fds-semantic-surface-action-second-active': colorNuance + 3,
    '--fds-semantic-surface-action-second-no_fill-hover': 0,
    '--fds-semantic-surface-action-second-no_fill-active': 2,
    '--fds-semantic-text-action-second-default': 5,
    '--fds-semantic-text-action-second-hover': 6,
    '--fds-semantic-text-action-second-active': 7,
  };
};

export const getFormElementTokens = (
  colorNuance: number,
): { [token: string]: number } => {
  return {
    '--fds-semantic-border-input-hover': colorNuance,
    '--fds-semantic-border-input-default': 8,
    '--fds-semantic-text-action-hover': 6,
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
