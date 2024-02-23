import { useState } from 'react';
import styles from './BorderRadiusSelect.module.css';

interface BorderRadiusInputProps {
  borderRadiusSize: string;
}

const BorderRadiusInput: React.FC<BorderRadiusInputProps> = ({
  borderRadiusSize,
}) => {
  const [borderRadius, setBorderRadius] = useState(0);

  const handleBorderRadiusChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBorderRadius(parseInt(e.target.value));

    document.documentElement.style.setProperty(
      `--fds-border_radius-${borderRadiusSize}`,
      e.target.value + 'px',
    );
  };
  return (
    <div className={styles.borderRadiusSelectorInput}>
      <label htmlFor={`borderRadiusSlider${borderRadiusSize}`}>
        {borderRadiusSize}
      </label>
      <input
        className={styles.borderRadiusSlider}
        type='range'
        id={`borderRadiusSlider${borderRadiusSize}`}
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
        id={`borderRadiusNumber${borderRadiusSize}`}
        value={borderRadius}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleBorderRadiusChange(e)
        }
      />
    </div>
  );
};
export default BorderRadiusInput;
