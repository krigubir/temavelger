import {
  getDefaultColorData,
  getDefaultSurfaceColorTokens,
} from '../data/defaultStateData';

export const resetBrandColorData = () => {
  const tokensList = getDefaultColorData();
  for (const token in tokensList) {
    document.documentElement.style.setProperty(token, tokensList[token]);
  }
};

export const resetSurfaceColorData = () => {
  const tokenList = getDefaultSurfaceColorTokens();
  for (const token in tokenList) {
    document.documentElement.style.setProperty(token, tokenList[token]);
  }
};
