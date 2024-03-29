import { getDefaultColorData } from '../data/defaultStateData';

export const resetBrandColorData = () => {
  const tokensList = getDefaultColorData();
  for (const token in tokensList) {
    document.documentElement.style.setProperty(token, tokensList[token]);
  }
};
