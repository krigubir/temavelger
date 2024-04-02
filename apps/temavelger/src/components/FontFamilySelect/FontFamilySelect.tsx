import { useState } from 'react';
import { Button, HelpText, Textfield } from '@digdir/designsystemet-react';

import { useReducerContext } from '../../contexts/useReducerContext';
import {
  RESET_FONT_FAMILY_DATA,
  UPDATE_FONT_FAMILY_DATA,
} from '../../reducer/actions';
import { updateFontFamilyDOM } from '../../utils/updateFontFamilyDOM';
import { formatFontFamilyInput } from '../../utils/formatFontFamilyInput';

import styles from './FontFamilySelect.module.css';

const FontFamilySelector = () => {
  const [fontFamily, setFontFamily] = useState('');
  const { dispatch } = useReducerContext();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setFontFamily(value);
  };

  const updateFontFamilyOnBlur = () => {
    const formattedInput: string = formatFontFamilyInput(fontFamily);
    updateFontFamilyDOM(formattedInput);

    dispatch({
      type: UPDATE_FONT_FAMILY_DATA,
      payload: { fontFamily: formattedInput },
    });
  };

  const updateFontFamilyOnEnter = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      const formattedInput: string = formatFontFamilyInput(fontFamily);
      updateFontFamilyDOM(formattedInput);

      dispatch({
        type: UPDATE_FONT_FAMILY_DATA,
        payload: { fontFamily: formattedInput },
      });
    }
  };

  const resetSettings = () => {
    dispatch({ type: RESET_FONT_FAMILY_DATA });
    setFontFamily('');
    updateFontFamilyDOM('Inter, sans-serif');
  };

  return (
    <div className={styles.fontFamilySelector}>
      <div className={styles.fontFamilySelectorLabel}>
        <HelpText
          size='small'
          title='Choose font'
          placement='top-start'
          portal={true}
        >
          {
            'Skriv inn ønskede font-familier. F.eks. Arial, Inter, Sans-serif, ...'
          }
        </HelpText>
        <label htmlFor='fontFamilyInput'>Skriv inn font-family</label>
        <Button
          variant='tertiary'
          size='medium'
          onClick={resetSettings}
          className={styles.resetButton}
        >
          nullstill
        </Button>
      </div>

      <Textfield
        id='fontFamilyInput'
        placeholder='Arial, Inter, Sans-serif, ...'
        value={fontFamily}
        onChange={(e) => handleInputChange(e)}
        onBlur={updateFontFamilyOnBlur}
        onKeyDown={(e) => {
          updateFontFamilyOnEnter(e);
        }}
      />
    </div>
  );
};
export default FontFamilySelector;
