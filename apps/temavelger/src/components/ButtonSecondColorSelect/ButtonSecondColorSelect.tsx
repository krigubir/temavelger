import { HelpText, NativeSelect } from '@digdir/designsystemet-react';
import { useState } from 'react';

import checkColorContrast from '../../utils/checkColorContrast';
import { updateButtonSecondColorTokens } from '../../utils/updateActionColorTokens';
import { useReducerContext } from '../../contexts/useReducerContext';
import { generateColorScaleOptions } from '../../utils/generateColorScaleOptions';
import { UPDATE_BUTTON_SECOND_DATA } from '../../reducer/actions';

import styles from './ButtonSecondColorSelect.module.css';

const ButtonSecondColorSelect = () => {
  const { state, dispatch } = useReducerContext();
  const [activeButtonSecondColor, setActiveButtonSecondColor] =
    useState<string>('#fff');

  const changeButtonSecondColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

    setActiveButtonSecondColor(color);
    updateButtonSecondColorTokens(chosenColorIndex, altColorNumber, state);

    dispatch({
      type: UPDATE_BUTTON_SECOND_DATA,
      payload: {
        buttonSecondColorScale: state.colorScales[altColorNumber].colorScale,
        chosenColorIndex: chosenColorIndex,
      },
    });
  };

  return (
    <div className={styles.actionColorPicker}>
      <div className={styles.actionColorLabel}>
        <label htmlFor='buttonSecondColorSelect'>
          Velg farge for <strong>Button Second</strong>
        </label>
        <HelpText
          size='small'
          title='Button second Help Text'
          placement='right'
          portal={true}
        >
          {
            'Button Second-knapper utgjør sekundærknappene på nettsiden. Bruk disse knappe der synlighet og kontrast er mindre vikitg.'
          }
        </HelpText>
      </div>
      <NativeSelect
        size='medium'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeButtonSecondColor(e)
        }
        style={{
          backgroundColor: activeButtonSecondColor,
          color: checkColorContrast(activeButtonSecondColor)
            ? 'black'
            : 'white',
          borderRadius: '5px',
        }}
        id='buttonSecondColorSelect'
      >
        <option value={JSON.stringify({ color: 'white' })}>
          Velg farge...
        </option>
        {generateColorScaleOptions(state)}
      </NativeSelect>
    </div>
  );
};

export default ButtonSecondColorSelect;
