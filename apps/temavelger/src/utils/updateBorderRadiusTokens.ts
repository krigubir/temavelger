import { getBorderRadiusTokens } from '../data/designTokens';

export const updateBorderRadiusData = (borderRadiusValue: number) => {
  const tokenList: string[] = getBorderRadiusTokens();

  for (const token of tokenList) {
    document.documentElement.style.setProperty(token, `${borderRadiusValue}px`);
  }
};
