import generateColorScaleHSL from '../utils/generateColorScaleHSL';

const colorPickerData = [
  {
    token: '--fds-semantic-surface-first-light',
    initialColorScale: generateColorScaleHSL('#f67f82', 9),
    altColorNumber: 1,
  },
  {
    token: '--fds-semantic-surface-second-light',
    initialColorScale: generateColorScaleHSL('#eabb4d', 9),
    altColorNumber: 2,
  },
  {
    token: '--fds-semantic-surface-third-light',
    initialColorScale: generateColorScaleHSL('#4badf7', 9),
    altColorNumber: 3,
  },
];

export default colorPickerData;
