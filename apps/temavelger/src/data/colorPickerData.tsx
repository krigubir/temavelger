import generateColorScaleHSL from '../utils/generateColorScaleHSL';

const colorPickerData = [
  {
    colorScale: generateColorScaleHSL('#f67f82', 9),
    altColorNumber: 1,
    removable: false,
  },
  {
    colorScale: generateColorScaleHSL('#eabb4d', 9),
    altColorNumber: 2,
    removable: false,
  },
  {
    colorScale: generateColorScaleHSL('#4badf7', 9),
    altColorNumber: 3,
    removable: false,
  },
];

export default colorPickerData;
