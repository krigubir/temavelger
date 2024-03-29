import { Button, HelpText, NativeSelect } from '@digdir/designsystemet-react';
import { useState } from 'react';

import checkColorContrast from '../../utils/checkColorContrast';
import { updateButtonSecondColorTokens } from '../../utils/updateActionColorTokens';
import { useReducerContext } from '../../contexts/useReducerContext';
import { generateColorScaleOptions } from '../../utils/generateColorScaleOptions';
import {
  RESET_BUTTON_SECOND_DATA,
  UPDATE_BUTTON_SECOND_DATA,
} from '../../reducer/actions';
import { resetButtonSecondDOM } from '../../utils/resetActionColorTokens';

import styles from './ButtonSecondColorSelect.module.css';

const ButtonSecondColorSelect = () => {
  const { state, dispatch } = useReducerContext();
  const [activeButtonSecondColor, setActiveButtonSecondColor] =
    useState<string>('#fff');

  const changeButtonSecondColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const {
      color,
      chosenColorIndex,
      altColorNumber,
    }: { color: string; chosenColorIndex: number; altColorNumber: number } =
      JSON.parse(e.target.value) as {
        color: string;
        chosenColorIndex: number;
        altColorNumber: number;
      };

    setActiveButtonSecondColor(color);

    if (altColorNumber === -1) {
      resetButtonSecondDOM();
      return;
    }
    updateButtonSecondColorTokens(chosenColorIndex, altColorNumber, state);

    dispatch({
      type: UPDATE_BUTTON_SECOND_DATA,
      payload: {
        buttonSecondColorScale:
          state.colorPickerList[altColorNumber].colorScale,
        chosenColorIndex: chosenColorIndex,
      },
    });
  };

  const resetSettings = () => {
    dispatch({ type: RESET_BUTTON_SECOND_DATA });
    setActiveButtonSecondColor('#fff');
    resetButtonSecondDOM();
  };

  return (
    <div className={styles.actionColorPicker}>
      <div className={styles.actionColorLabel}>
        <HelpText
          size='small'
          title='Button second Help Text'
          placement='top-start'
          portal={true}
        >
          {
            'Button Second-knapper utgjør sekundærknappene på nettsiden. Bruk disse knappe der synlighet og kontrast er mindre vikitg.'
          }
        </HelpText>
        <label htmlFor='buttonSecondColorSelect'>
          Velg farge for <strong>Button Second</strong>
        </label>
        <Button
          variant='tertiary'
          size='medium'
          onClick={resetSettings}
          className={styles.resetButton}
        >
          reset
        </Button>
      </div>
      <NativeSelect
        size='medium'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeButtonSecondColor(e)
        }
        style={{
          backgroundColor: activeButtonSecondColor,
          color:
            activeButtonSecondColor === '#fff'
              ? '#666666'
              : checkColorContrast(activeButtonSecondColor)
              ? 'black'
              : 'white',
          borderRadius: '4px',
        }}
        id='buttonSecondColorSelect'
      >
        <option value={JSON.stringify({ color: '#fff', altColorNumber: -1 })}>
          Velg farge...
        </option>
        {generateColorScaleOptions(state)}
      </NativeSelect>
    </div>
  );
};

export default ButtonSecondColorSelect;
