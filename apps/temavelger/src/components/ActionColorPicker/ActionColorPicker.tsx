import styles from './ActionColorPicker.module.css';
import { HelpText, NativeSelect } from '@digdir/design-system-react';
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
      <div className={styles.actionColorLabel}>
        <label htmlFor={`actionColorPicker${variant}`}>
          {`Velg farge for Action ${variant}:`}
        </label>
        <HelpText
          size='small'
          title='Select action first title'
          placement='right'
          portal={true}
        >
          {
            'Action Farge er en farge som brukes til å fremheve en handling, som for eksempel en knapp eller en lenke. Fargen skal være i kontrast til bakgrunnen og andre farger i designet. Du kan velge mellom ulike farger i fargepaletten. Start med å velge en brand-farge over.'
          }
        </HelpText>
      </div>
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
