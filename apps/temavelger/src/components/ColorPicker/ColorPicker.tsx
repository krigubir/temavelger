import { useState } from 'react';
import styles from './ColorPicker.module.css';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import { useReducerContext } from '../../contexts/useReducerContext';
import { UPDATE_COLOR_SCALE } from '../../reducer/actions';
import { updateColorTokens } from '../../utils/updateColorTokens';

export type ColorPicker = {
  colorScale: string[];
  altColorNumber: number;
  removable: boolean;
};

interface ColorPickerProps {
  initialColorScale: string[];
  altColorNumber: number;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  initialColorScale,
  altColorNumber,
}) => {
  // local storage of color-scale
  const [colorScale, setColorScale] = useState<string[]>(initialColorScale);

  // give access to the dispatch function
  const { dispatch } = useReducerContext();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColorScale = generateColorScaleHSL(e.target.value, 9);

    dispatch({
      type: UPDATE_COLOR_SCALE,
      payload: { altColorNumber, colorScale: newColorScale },
    });

    setColorScale(newColorScale);
    updateColorTokens(newColorScale, altColorNumber);
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
