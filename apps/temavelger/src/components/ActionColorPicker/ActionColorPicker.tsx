import styles from './ActionColorPicker.module.css';
import { NativeSelect } from '@digdir/design-system-react';
import { useColorScale } from '../../contexts/useColorScale';
import { useState } from 'react';
import checkColorContrast from '../../utils/checkColorContrast';

interface ActionColorPickerProps {
  variant: string;
}

const ActionColorPicker: React.FC<ActionColorPickerProps> = ({ variant }) => {
  const { colorScales } = useColorScale();
  const [activeColor, setActiveColor] = useState<string>('#fff');

  const generateOptions = () => {
    const options: React.ReactNode[] = [];
    {
      Object.entries(colorScales).map(([altColorNumber, colorScale]) =>
        colorScale.map((color, index) =>
          options.push(
            <option
              key={`${altColorNumber}-${index}`}
              value={color}
            >
              {`alt${altColorNumber} - ${(index + 1) * 100}`}
            </option>,
          ),
        ),
      );
    }
    return options;
  };

  const changeActionColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setActiveColor(e.target.value);
    document.documentElement.style.setProperty(
      `--fds-semantic-surface-action-${variant.toLowerCase()}-default`,
      e.target.value,
    );
    document.documentElement.style.setProperty(
      `--fds-semantic-surface-action-${variant.toLowerCase()}-hover`,
      e.target.value,
    );
    document.documentElement.style.setProperty(
      `--fds-semantic-surface-action-first-active`,
      e.target.value,
    );
  };

  return (
    <div className={styles.actionColorPicker}>
      <label
        htmlFor={`actionColorPicker${variant}`}
      >{`Hvilken farge skal brukes for Action ${variant}?`}</label>
      <NativeSelect
        size='medium'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeActionColor(e)
        }
        style={{
          backgroundColor: activeColor,
          color: checkColorContrast(activeColor) ? 'black' : 'white',
          borderRadius: '0',
        }}
        id={`actionColorPicker${variant}`}
      >
        <option value=''>Velg farge...</option>
        {generateOptions()}
      </NativeSelect>
    </div>
  );
};
export default ActionColorPicker;
