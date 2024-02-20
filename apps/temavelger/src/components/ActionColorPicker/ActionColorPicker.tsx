import styles from './ActionColorPicker.module.css';
import { NativeSelect } from '@digdir/design-system-react';
import { useColorScale } from '../../contexts/useColorScale';
import { useState } from 'react';
import checkColorContrast from '../../utils/checkColorContrast';

// TO-DO:
// - The components from Designsystemet should now be connected to the brand-alt colors
//   so that the color of the components can be changed by changing the brand-alt colors
//   instead of updating the individual semantic-tokens

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
              {`--fds-brand-alt${altColorNumber}-${(index + 1) * 100}`}
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
      <NativeSelect
        label={`Hvilken farge skal brukes for Action ${variant}?`}
        size='medium'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeActionColor(e)
        }
        style={{
          backgroundColor: activeColor,
          color: checkColorContrast(activeColor) ? 'black' : 'white',
        }}
      >
        <option value=''>Velg farge...</option>
        {generateOptions()}
      </NativeSelect>
    </div>
  );
};
export default ActionColorPicker;
