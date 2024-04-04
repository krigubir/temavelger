import { getBorderRadiusTokens } from '../data/designTokens';

export const updateBorderRadiusTokens = (borderRadiusValue: number) => {
  const tokenList: string[] = getBorderRadiusTokens();

  for (const token of tokenList) {
    document.documentElement.style.setProperty(token, `${borderRadiusValue}px`);
  }
};
