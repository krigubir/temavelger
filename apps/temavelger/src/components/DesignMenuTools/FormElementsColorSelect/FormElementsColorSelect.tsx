import { Button, HelpText, NativeSelect } from '@digdir/designsystemet-react';
import { useState } from 'react';

import checkColorContrast from '../../../utils/checkColorContrast';
import { updateFormElementColorTokens } from '../../../utils/updateActionColorTokens';
import { useReducerContext } from '../../../contexts/useReducerContext';
import { generateColorScaleOptions } from '../../../utils/generateColorScaleOptions';
import {
  RESET_FORM_ELEMENTS_DATA,
  UPDATE_FORM_ELEMENTS_DATA,
} from '../../../reducer/actions';
import { resetFormElementsDOM } from '../../../utils/resetActionColorTokens';

import styles from './FormElementsColorSelect.module.css';

const FormElementsColorSelect = () => {
  const { state, dispatch } = useReducerContext();
  const [activeFormElementsColor, setActiveFormElementsColor] =
    useState<string>('#fff');

  const changeFormElementsColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

    setActiveFormElementsColor(color);

    if (altColorNumber === -1) {
      resetFormElementsDOM();
      return;
    }

    updateFormElementColorTokens(chosenColorIndex, altColorNumber, state);

    dispatch({
      type: UPDATE_FORM_ELEMENTS_DATA,
      payload: {
        formElementsColorScale:
          state.colorPickerList[altColorNumber].colorScale,
        chosenColorIndex: chosenColorIndex,
      },
    });
  };

  const resetSettings = () => {
    dispatch({ type: RESET_FORM_ELEMENTS_DATA });
    setActiveFormElementsColor('#fff');
    resetFormElementsDOM();
  };

  return (
    <div className={styles.actionColorPicker}>
      <div className={styles.actionColorLabel}>
        <HelpText
          size='small'
          title='Form Elements Help Text'
          placement='top-start'
          portal={true}
        >
          {
            'Form Elements representerer input-felt og andre form-elementer som ikke er en knapp.'
          }
        </HelpText>
        <label htmlFor='formElementsColorSelect'>
          Velg farge for form elementer
        </label>
        <Button
          variant='tertiary'
          size='medium'
          onClick={resetSettings}
          className={styles.resetButton}
        >
          nullstill
        </Button>
      </div>
      <section className={styles.helperText}>
        Gjelder Radio, Checkbox, TextField, TextArea, Search og Combobox
      </section>
      <NativeSelect
        id='formElementsColorSelect'
        size='medium'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeFormElementsColor(e)
        }
        style={{
          backgroundColor: activeFormElementsColor,
          color:
            activeFormElementsColor === '#fff'
              ? '#666666'
              : checkColorContrast(activeFormElementsColor)
              ? 'black'
              : 'white',
          borderRadius: '5px',
        }}
      >
        <option value={JSON.stringify({ color: '#fff', altColorNumber: -1 })}>
          Velg farge...
        </option>
        {generateColorScaleOptions(state)}
      </NativeSelect>
    </div>
  );
};

export default FormElementsColorSelect;
