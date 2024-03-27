import { useState } from 'react';
import { HelpText, Textfield } from '@digdir/designsystemet-react';

import { useReducerContext } from '../../contexts/useReducerContext';
import { UPDATE_FONT_FAMILY_DATA } from '../../reducer/actions';
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

  return (
    <div className={styles.fontFamilySelector}>
      <div className={styles.fontFamilySelectorLabel}>
        <label htmlFor='fontFamilyInput'>Skriv inn font-family</label>
        <HelpText
          size='small'
          title='Choose font'
          placement='right'
          portal={true}
        >
          {
            'Her kan du utforske ulike fonter for ditt brand. Sørg for at fonten du velger er installert på din maskin.'
          }
        </HelpText>
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
        style={{ borderRadius: '4px' }}
      />
    </div>
  );
};
export default FontFamilySelector;
