import { Button, Tag } from '@digdir/designsystemet-react';
import { TrashIcon } from '@navikt/aksel-icons';

import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import { useReducerContext } from '../../contexts/useReducerContext';
import {
  RESET_SURFACE_COLOR_DATA,
  UPDATE_COLOR_PICKER_DATA,
} from '../../reducer/actions';
import {
  updateColorTokens,
  updateSurfaceColorTokens,
} from '../../utils/updateColorTokens';

import styles from './ColorPicker.module.css';
import { setSurfaceColorOfSvg } from '../../utils/setSurfaceColorOfSvg';

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
  altColorNumber,
  removable,
  removeColorPicker,
}) => {
  const { state, dispatch } = useReducerContext();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColorScale = generateColorScaleHSL(e.target.value, 9);

    dispatch({
      type: UPDATE_COLOR_PICKER_DATA,
      payload: { altColorNumber, colorScale: newColorScale },
    });

    dispatch({ type: RESET_SURFACE_COLOR_DATA, payload: { altColorNumber } });

    updateColorTokens(newColorScale, altColorNumber); // updates the DOM
    updateSurfaceColorTokens(newColorScale, altColorNumber, 1); // updates the DOM
    if (altColorNumber === 2) {
      setSurfaceColorOfSvg(newColorScale, 2);
    }
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
          value={state.colorPickerList[altColorNumber - 1].colorScale[4]}
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

      <ColorGenerator
        colorScale={state.colorPickerList[altColorNumber - 1].colorScale}
        altColorNumber={altColorNumber}
      ></ColorGenerator>
    </div>
  );
};
export default ColorPicker;
