import { useState } from 'react';
import styles from './ColorPicker.module.css';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import checkColorContrast from '../../utils/checkColorContrast';
import { useReducerContext } from '../../contexts/useReducerContext';
import { UPDATE_COLOR_SCALE } from '../../reducer/actions';

export type ColorPicker = {
  token: string;
  colorScale: string[];
  altColorNumber: number;
  removable: boolean;
};

interface ColorPickerProps {
  token: string;
  initialColorScale: string[];
  altColorNumber: number;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  token,
  initialColorScale,
  altColorNumber,
}) => {
  // const { updateColorScale } = useColorScale();
  const [colorScale, setColorScale] = useState<string[]>(initialColorScale);

  // try using reducer
  const { dispatch } = useReducerContext();

  // Update color-scale and brand-color
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColorScale = generateColorScaleHSL(e.target.value, 9);
    // updateColorScale(Number(altColorNumber), newColorScale); // used in code-generator

    // dispatch action
    dispatch({
      type: UPDATE_COLOR_SCALE,
      payload: { altColorNumber, colorScale: newColorScale },
    });
    setColorScale(newColorScale);

    // change semantic-surface color
    document.documentElement.style.setProperty(token, newColorScale[2]);

    // change semantic-surface-hover color (accordion)
    document.documentElement.style.setProperty(
      token + '-hover',
      newColorScale[3],
    );

    // change the brand-alt colors
    for (let i = 1; i <= newColorScale.length; i++) {
      document.documentElement.style.setProperty(
        `--fds-brand-alt${altColorNumber}-${i * 100}`,
        newColorScale[i - 1],
      );
    }

    // change the color of the text in the components
    document.documentElement.style.setProperty(
      '--fds-semantic-text-neutral-default',
      checkColorContrast(newColorScale[1]) ? 'black' : 'white',
    );
  };

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorPickerInputContainer}>
        <input
          id='colorPicker'
          className={styles.colorPickerInput}
          name='colorPicker'
          type='color'
          value={colorScale[4]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleColorChange(e)
          }
        />
      </div>

      <ColorGenerator colorScale={colorScale}></ColorGenerator>
    </div>
  );
};
export default ColorPicker;
