import { NativeSelect } from '@digdir/design-system-react';
import styles from './NativeSelectComponent.module.css';

interface NativeSelectProps {
  variant: string;
}

const NativeSelectComponent: React.FC<NativeSelectProps> = ({ variant }) => {
  return (
    <div className={styles.nativeSelectContainer}>
      <NativeSelect size='medium'>
        <option value='blank'>{variant} color</option>
      </NativeSelect>
    </div>
  );
};
export default NativeSelectComponent;
