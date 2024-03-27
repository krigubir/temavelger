import { HelpText } from '@digdir/designsystemet-react';

import BorderRadiusInput from './BorderRadiusInput';
import styles from './BorderRadiusSelect.module.css';

const BorderRadiusSelect = () => {
  return (
    <div className={styles.borderRadiusSelector}>
      <div className={styles.borderRadiusLabel}>
        <label htmlFor='borderRadiusSlider'>{'Velg border-radius'}</label>
        <HelpText
          size='small'
          title='Edit border-radius'
          placement='right'
          portal={true}
        >
          {
            'Juster border-radius for å se hvordan det påvirker elementene i designet. Verdien kan endres ved å skrive inn et tall i feltet eller ved å dra slideren. Verdien er representerert i pixler.'
          }
        </HelpText>
      </div>
      <BorderRadiusInput />
    </div>
  );
};
export default BorderRadiusSelect;
