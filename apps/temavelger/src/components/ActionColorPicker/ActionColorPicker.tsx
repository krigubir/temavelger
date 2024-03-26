import { HelpText, NativeSelect } from '@digdir/designsystemet-react';
import { useState } from 'react';

import checkColorContrast from '../../utils/checkColorContrast';
import { useReducerContext } from '../../contexts/useReducerContext';
import { updateActionColorTokens } from '../../utils/updateActionColorTokens';
import {
  UPDATE_BUTTON_FIRST_DATA,
  UPDATE_BUTTON_SECOND_DATA,
  UPDATE_FORM_ELEMENTS_DATA,
} from '../../reducer/actions';

import styles from './ActionColorPicker.module.css';

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

  const generateColorScaleOptions = () => {
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
    const {
      color,
      chosenColorIndex,
      altColorNumber,
    }: { color: string; chosenColorIndex: number; altColorNumber: number } =
      JSON.parse(e.target.value) as {
        color: string;
        chosenColorIndex: number;
        altColorNumber: number;
      };

    setActiveColor(color);
    // updates DOM elements
    updateActionColorTokens(
      variant,
      actionType,
      chosenColorIndex,
      altColorNumber,
      state,
    );

    // updates state
    if (
      variant.toLowerCase() === 'first' &&
      actionType.toLowerCase() === 'button'
    )
      dispatch({
        type: UPDATE_BUTTON_FIRST_DATA,
        payload: {
          buttonFirstColorScale: state.colorScales[altColorNumber].colorScale,
          chosenColorIndex: chosenColorIndex,
        },
      });
    else if (
      variant.toLowerCase() === 'second' &&
      actionType.toLowerCase() === 'button'
    )
      dispatch({
        type: UPDATE_BUTTON_SECOND_DATA,
        payload: {
          buttonSecondColorScale: state.colorScales[altColorNumber].colorScale,
          chosenColorIndex: chosenColorIndex,
        },
      });
    else if (
      variant.toLowerCase() === '' &&
      actionType.toLowerCase() === 'form elements'
    )
      dispatch({
        type: UPDATE_FORM_ELEMENTS_DATA,
        payload: {
          formElementsColorScale: state.colorScales[altColorNumber].colorScale,
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
        <option value={JSON.stringify({ color: 'white' })}>
          Velg farge...
        </option>
        {generateColorScaleOptions()}
      </NativeSelect>
    </div>
  );
};
export default ActionColorPicker;
