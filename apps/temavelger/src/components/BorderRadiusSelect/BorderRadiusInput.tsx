import { useContext } from 'react';

import { updateBorderRadiusData } from '../../utils/updateBorderRadiusTokens';
import { ReducerContext } from '../../contexts/ReducerContext';
import { UPDATE_BORDER_RADIUS_DATA } from '../../reducer/actions';

import styles from './BorderRadiusSelect.module.css';

const BorderRadiusInput = () => {
  const { state, dispatch } = useContext(ReducerContext);

  const handleBorderRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newBorderRadius = parseInt(e.target.value);

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
        value={state.borderRadiusData}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleBorderRadiusChange(e)
        }
      />
      <input
        className={styles.borderRadiusNumber}
        type='number'
        id={'borderRadiusNumber'}
        value={state.borderRadiusData}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleBorderRadiusChange(e)
        }
      />
    </div>
  );
};
export default BorderRadiusInput;
