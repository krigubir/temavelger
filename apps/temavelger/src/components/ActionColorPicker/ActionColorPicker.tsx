import styles from './ActionColorPicker.module.css';
import { HelpText, NativeSelect } from '@digdir/design-system-react';
import { useState } from 'react';
import checkColorContrast from '../../utils/checkColorContrast';
import { useReducerContext } from '../../contexts/useReducerContext';
import { updateActionColorTokens } from '../../utils/updateActionColorTokens';

interface ActionColorPickerProps {
  variant: string;
  actionType: string;
}

const ActionColorPicker: React.FC<ActionColorPickerProps> = ({
  variant,
  actionType,
}) => {
  // const { colorScales } = useColorScale();
  const { state } = useReducerContext();
  const [activeColor, setActiveColor] = useState<string>('#fff');

  const generateOptions = () => {
    console.log('state:', state);
    const options: React.ReactNode[] = [];
    {
      state.colorScales.map((value, index) =>
        value.colorScale.map((color, colorNuance) =>
          options.push(
            <option
              key={`${index + 1}-${colorNuance}`}
              value={JSON.stringify({
                color: color,
                colorNuance: colorNuance,
                index: index,
              })}
            >{`alt${value.altColorNumber} - ${
              (colorNuance + 1) * 100
            }`}</option>,
          ),
        ),
      );
    }

    return options;
  };

  const changeActionColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const { color, colorNuance, index } = JSON.parse(e.target.value);

    setActiveColor(color);
    updateActionColorTokens(
      variant,
      actionType,
      color,
      colorNuance,
      index,
      state,
    );
  };

  return (
    <div className={styles.actionColorPicker}>
      <div className={styles.actionColorLabel}>
        <label htmlFor={`actionColorPicker${variant}`}>
          {`Velg farge for '${actionType} ${variant}':`}
        </label>
        <HelpText
          size='small'
          title={`Select ${actionType} ${variant} color`}
          placement='right'
          portal={true}
        >
          {
            'Action Farge er en farge som brukes til å fremheve en handling, som for eksempel en knapp eller en lenke. Du kan velge mellom ulike farger i fargepaletten. Start med å velge en brand-farge over.'
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
          borderRadius: '5px',
        }}
        id={`actionColorPicker${actionType}${variant}`}
      >
        <option value=''>Velg farge...</option>
        {generateOptions()}
      </NativeSelect>
    </div>
  );
};
export default ActionColorPicker;
