import { Button, HelpText } from '@digdir/designsystemet-react';
import { useState } from 'react';

import { RESET_BORDER_RADIUS_DATA } from '../../reducer/actions';
import { useReducerContext } from '../../contexts/useReducerContext';
import { resetBorderRadiusDOM } from '../../utils/resetBorderRadiusDOM';

import BorderRadiusInput from './BorderRadiusInput';
import styles from './BorderRadiusSelect.module.css';

const BorderRadiusSelect = () => {
  const { dispatch } = useReducerContext();
  const [borderRadius, setBorderRadius] = useState(0);

  const resetSettings = () => {
    dispatch({ type: RESET_BORDER_RADIUS_DATA });
    resetBorderRadiusDOM();
  };

  return (
    <div className={styles.borderRadiusSelector}>
      <div className={styles.borderRadiusLabel}>
        <HelpText
          size='small'
          title='Edit border-radius'
          placement='top-start'
          portal={true}
        >
          {
            'Juster border-radius for å se hvordan det påvirker elementene i designet. Verdien kan endres ved å skrive inn et tall i feltet eller ved å dra slideren. Verdien er representerert i pixler.'
          }
        </HelpText>
        <label htmlFor='borderRadiusSlider'>{'Velg border-radius'}</label>
        <Button
          variant='tertiary'
          size='medium'
          onClick={resetSettings}
          className={styles.resetButton}
        >
          reset
        </Button>
      </div>
      <BorderRadiusInput
        borderRadius={borderRadius}
        setBorderRadius={setBorderRadius}
      />
    </div>
  );
};
export default BorderRadiusSelect;
