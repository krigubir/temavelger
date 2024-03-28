import { HelpText, NativeSelect } from '@digdir/designsystemet-react';
import { useState } from 'react';

import checkColorContrast from '../../utils/checkColorContrast';
import { updateFormElementColorTokens } from '../../utils/updateActionColorTokens';
import { useReducerContext } from '../../contexts/useReducerContext';
import { generateColorScaleOptions } from '../../utils/generateColorScaleOptions';
import { UPDATE_FORM_ELEMENTS_DATA } from '../../reducer/actions';

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

  return (
    <div className={styles.actionColorPicker}>
      <div className={styles.actionColorLabel}>
        <label htmlFor='fromElementsColorSelect'>
          Velg farge for <strong>Form Elements</strong>
        </label>
        <HelpText
          size='small'
          title='Form Elements Help Text'
          placement='right'
          portal={true}
        >
          {
            'Form Elements representerer input-felt og andre form-elementer som ikke er en knapp.'
          }
        </HelpText>
      </div>
      <section className={styles.helperText}>
        Gjelder farger for Radio, Checkbox, TextField, TextArea, Search og
        Combobox
      </section>
      <NativeSelect
        size='medium'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeFormElementsColor(e)
        }
        style={{
          backgroundColor: activeFormElementsColor,
          color: checkColorContrast(activeFormElementsColor)
            ? 'black'
            : 'white',
          borderRadius: '5px',
        }}
        id='formElementsColorSelect'
      >
        <option value={JSON.stringify({ color: 'white' })}>
          Velg farge...
        </option>
        {generateColorScaleOptions(state)}
      </NativeSelect>
    </div>
  );
};

export default FormElementsColorSelect;
