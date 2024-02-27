import BorderRadiusInput from './BorderRadiusInput';
import styles from './BorderRadiusSelect.module.css';
import { HelpText } from '@digdir/design-system-react';

const BorderRadiusSelect = () => {
  return (
    <div className={styles.borderRadiusSelector}>
      <div className={styles.borderRadiusLabel}>
        <h3>Endre border-radius</h3>
        <HelpText
          className={styles.helpText}
          size='small'
          title='Edit border-radius'
          placement='right'
          portal={true}
        >
          {
            'Her kan du velge border-radius for ditt brand. Border-radiusen du velger her vil bli brukt i designet av komponentene dine.'
          }
        </HelpText>
      </div>
      <BorderRadiusInput borderRadiusSize='small' />
      <BorderRadiusInput borderRadiusSize='medium' />
      <BorderRadiusInput borderRadiusSize='large' />
      <BorderRadiusInput borderRadiusSize='xlarge' />
    </div>
  );
};
export default BorderRadiusSelect;
