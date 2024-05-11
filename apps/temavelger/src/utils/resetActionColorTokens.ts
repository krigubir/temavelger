import {
  getDefaultButtonFirstData,
  getDefaultButtonSecondData,
  getDefaultFormElementData,
} from '../data/defaultToolSettingsData';

export const resetButtonFirstDOM = () => {
  const tokenList = getDefaultButtonFirstData();
  for (const token in tokenList) {
    document.documentElement.style.setProperty(token, tokenList[token]);
  }
};

export const resetButtonSecondDOM = () => {
  const tokenList = getDefaultButtonSecondData();
  for (const token in tokenList) {
    document.documentElement.style.setProperty(token, tokenList[token]);
  }
};

export const resetFormElementsDOM = () => {
  const tokenList = getDefaultFormElementData();
  for (const token in tokenList) {
    document.documentElement.style.setProperty(token, tokenList[token]);
  }
};
