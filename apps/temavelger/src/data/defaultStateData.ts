import generateColorScaleHSL from '../utils/generateColorScaleHSL';

export const colorPickerData = [
  {
    colorScale: generateColorScaleHSL('#f01f24', 9),
    altColorNumber: 1,
    removable: false,
  },
  {
    colorScale: generateColorScaleHSL('#e5aa1f', 9),
    altColorNumber: 2,
    removable: false,
  },
  {
    colorScale: generateColorScaleHSL('#1a97f5', 9),
    altColorNumber: 3,
    removable: false,
  },
];

export const defaultState = {
  colorPickerList: colorPickerData,
  surfaceColorData: [],
  fontColor: '',
  buttonFirstData: {
    chosenColorIndex: 0,
    actionColorScale: [],
  },
  buttonSecondData: {
    chosenColorIndex: 0,
    actionColorScale: [],
  },
  formElementsData: {
    chosenColorIndex: 0,
    actionColorScale: [],
  },
  borderRadiusData: 0,
  fontFamilyData: '',
};
