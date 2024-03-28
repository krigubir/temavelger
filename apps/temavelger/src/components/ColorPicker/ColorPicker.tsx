import { useState } from 'react';
import { Button, Tag } from '@digdir/designsystemet-react';
import { TrashIcon } from '@navikt/aksel-icons';

import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import { useReducerContext } from '../../contexts/useReducerContext';
import { UPDATE_COLOR_SCALE } from '../../reducer/actions';
import { updateColorTokens } from '../../utils/updateColorTokens';

import styles from './ColorPicker.module.css';

export type ColorPicker = {
  colorScale: string[];
  altColorNumber: number;
  removable: boolean;
};

interface ColorPickerProps {
  initialColorScale: string[];
  altColorNumber: number;
  removable: boolean;
  removeColorPicker: (altColorNumber: number) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  initialColorScale,
  altColorNumber,
  removable,
  removeColorPicker,
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

    setColorScale(newColorScale); // sets local color-scale
    updateColorTokens(newColorScale, altColorNumber); // updates the DOM
  };

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorPickerInputContainer}>
        <label htmlFor={`colorPicker${altColorNumber}`}>
          <Tag
            color='info'
            size='small'
          >
            {`alt ${altColorNumber}`}
          </Tag>
        </label>
        <input
          id={`colorPicker${altColorNumber}`}
          className={styles.colorPickerInput}
          name={`colorPicker${altColorNumber}`}
          type='color'
          value={colorScale[4]}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            handleColorChange(e)
          }
        />

        {removable && (
          <Button
            variant='tertiary'
            onClick={() => removeColorPicker(altColorNumber)}
            size='small'
            className={styles.removeColorPickerButton}
          >
            <TrashIcon fontSize='2rem' />
          </Button>
        )}
      </div>

      <ColorGenerator colorScale={colorScale}></ColorGenerator>
    </div>
  );
};
export default ColorPicker;
