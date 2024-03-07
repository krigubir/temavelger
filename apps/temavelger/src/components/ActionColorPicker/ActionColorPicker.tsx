import styles from './ActionColorPicker.module.css';
import { HelpText, NativeSelect } from '@digdir/design-system-react';
import { useState } from 'react';
import checkColorContrast from '../../utils/checkColorContrast';
import { useReducerContext } from '../../contexts/useReducerContext';
import { updateActionColorTokens } from '../../utils/updateActionColorTokens';
import { UPDATE_BUTTON_FIRST_COLOR_SCALE } from '../../reducer/actions';

interface ActionColorPickerProps {
  variant: string;
  actionType: string;
}

const ActionColorPicker: React.FC<ActionColorPickerProps> = ({
  variant,
  actionType,
}) => {
  const { state, dispatch } = useReducerContext();
  const [activeColor, setActiveColor] = useState<string>('#fff');

  const generateOptions = () => {
    const options: React.ReactNode[] = [];
    {
      state.colorScales.map((value, index) =>
        value.colorScale.map((color, colorNuanceIndex) =>
          options.push(
            <option
              key={`${index + 1}-${colorNuanceIndex}`}
              value={JSON.stringify({
                color: color,
                chosenColorIndex: colorNuanceIndex,
                altColorNumber: index,
              })}
            >{`alt${value.altColorNumber} - ${
              (colorNuanceIndex + 1) * 100
            }`}</option>,
          ),
        ),
      );
    }

    return options;
  };

  const changeActionColor = (
    e: React.ChangeEvent<HTMLSelectElement>,
    variant: string,
    actionType: string,
  ) => {
    const { color, chosenColorIndex, altColorNumber } = JSON.parse(
      e.target.value,
    );

    console.log('ActionColorPicker: ' + chosenColorIndex);

    setActiveColor(color);
    updateActionColorTokens(
      variant,
      actionType,
      color,
      chosenColorIndex,
      altColorNumber,
      state,
    );

    dispatch({
      type: UPDATE_BUTTON_FIRST_COLOR_SCALE,
      payload: {
        buttonFirstColorScale: state.colorScales[altColorNumber].colorScale,
        chosenColorIndex: chosenColorIndex,
      },
    });
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
          changeActionColor(e, variant, actionType)
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
