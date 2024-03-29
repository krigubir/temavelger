import generateColorScaleHSL from '../utils/generateColorScaleHSL';

const colorPickerData = [
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

export default colorPickerData;
