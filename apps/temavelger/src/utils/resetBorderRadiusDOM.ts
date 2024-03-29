import { getBorderRadiusTokens } from '../data/designTokens';

export const resetBorderRadiusDOM = () => {
  const tokenList = getBorderRadiusTokens();
  for (const token of tokenList) {
    document.documentElement.style.setProperty(token, '4px');
  }
};
