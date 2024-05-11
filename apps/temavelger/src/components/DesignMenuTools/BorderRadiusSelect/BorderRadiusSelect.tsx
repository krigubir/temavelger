import { Button, HelpText } from '@digdir/designsystemet-react';

import { RESET_BORDER_RADIUS_DATA } from '../../../reducer/actions';
import { useReducerContext } from '../../../contexts/useReducerContext';
import { resetBorderRadiusDOM } from '../../../utils/resetBorderRadiusDOM';

import BorderRadiusInput from './BorderRadiusInput';
import styles from './BorderRadiusSelect.module.css';

const BorderRadiusSelect = () => {
  const { dispatch } = useReducerContext();

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
            'Verdien kan endres ved å skrive inn et tall i feltet eller ved å dra slideren. Verdien er representerert i pixler.'
          }
        </HelpText>
        <label htmlFor='borderRadiusSlider'>{'Velg border-radius'}</label>
        <Button
          variant='tertiary'
          size='medium'
          onClick={resetSettings}
          className={styles.resetButton}
        >
          nullstill
        </Button>
      </div>
      <BorderRadiusInput />
    </div>
  );
};
export default BorderRadiusSelect;
