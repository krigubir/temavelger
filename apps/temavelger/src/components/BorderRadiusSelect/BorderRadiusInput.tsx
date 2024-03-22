import { useContext, useState } from 'react';

import styles from './BorderRadiusSelect.module.css';
import { updateBorderRadiusData } from '../../utils/updateBorderRadiusTokens';
import { ReducerContext } from '../../contexts/ReducerContext';
import { UPDATE_BORDER_RADIUS_DATA } from '../../reducer/actions';

const BorderRadiusInput = () => {
  const [borderRadius, setBorderRadius] = useState(0);
  const { dispatch } = useContext(ReducerContext);

  const handleBorderRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBorderRadius = parseInt(e.target.value);
    setBorderRadius(newBorderRadius);
    updateBorderRadiusData(newBorderRadius);

    dispatch({
      type: UPDATE_BORDER_RADIUS_DATA,
      payload: { borderRadiusValue: newBorderRadius },
    });
  };
  return (
    <div className={styles.borderRadiusSelectorInput}>
      <input
        className={styles.borderRadiusSlider}
        type='range'
        id={'borderRadiusSlider'}
        min='0'
        max='50'
        value={borderRadius}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleBorderRadiusChange(e)
        }
      />
      <input
        className={styles.borderRadiusNumber}
        type='number'
        id={'borderRadiusNumber'}
        value={borderRadius}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleBorderRadiusChange(e)
        }
      />
    </div>
  );
};
export default BorderRadiusInput;
