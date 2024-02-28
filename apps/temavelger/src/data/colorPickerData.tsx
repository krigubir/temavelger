import generateColorScaleHSL from '../utils/generateColorScaleHSL';

const colorPickerData = [
  {
    token: '--fds-semantic-surface-first-light',
    colorScale: generateColorScaleHSL('#f67f82', 9),
    altColorNumber: 1,
    removable: false,
  },
  {
    token: '--fds-semantic-surface-second-light',
    colorScale: generateColorScaleHSL('#eabb4d', 9),
    altColorNumber: 2,
    removable: false,
  },
  {
    token: '--fds-semantic-surface-third-light',
    colorScale: generateColorScaleHSL('#4badf7', 9),
    altColorNumber: 3,
    removable: false,
  },
];

export default colorPickerData;
