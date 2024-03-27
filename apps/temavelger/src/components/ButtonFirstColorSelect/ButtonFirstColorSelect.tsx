import { HelpText, NativeSelect } from '@digdir/designsystemet-react';
import { useState } from 'react';

import checkColorContrast from '../../utils/checkColorContrast';
import { updateButtonFirstColorTokens } from '../../utils/updateActionColorTokens';
import { useReducerContext } from '../../contexts/useReducerContext';
import { generateColorScaleOptions } from '../../utils/generateColorScaleOptions';
import { UPDATE_BUTTON_FIRST_DATA } from '../../reducer/actions';

import styles from './ButtonFirstColorSelect.module.css';

const ButtonFirstColorSelect = () => {
  const { state, dispatch } = useReducerContext();
  const [activeButtonFirstColor, setActiveButtonFirstColor] =
    useState<string>('#fff');

  const changeButtonFirstColor = (e: React.ChangeEvent<HTMLSelectElement>) => {
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

    setActiveButtonFirstColor(color);
    updateButtonFirstColorTokens(chosenColorIndex, altColorNumber, state);

    dispatch({
      type: UPDATE_BUTTON_FIRST_DATA,
      payload: {
        buttonFirstColorScale: state.colorScales[altColorNumber].colorScale,
        chosenColorIndex: chosenColorIndex,
      },
    });
  };

  return (
    <div className={styles.actionColorPicker}>
      <div className={styles.actionColorLabel}>
        <label htmlFor='buttonFirstColorSelect'>
          Velg farge for <strong>Button First</strong>
        </label>
        <HelpText
          size='small'
          title='Button first Help Text'
          placement='right'
          portal={true}
        >
          {
            'Button First-knapper utgjør hovedknappene på nettsiden og representerer viktige handlinger. Disse knappene bør ha god kontrast mot bakgrunnen og være lett synlige for brukere.'
          }
        </HelpText>
      </div>

      <NativeSelect
        size='medium'
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
          changeButtonFirstColor(e)
        }
        style={{
          backgroundColor: activeButtonFirstColor,
          color: checkColorContrast(activeButtonFirstColor) ? 'black' : 'white',
          borderRadius: '5px',
        }}
        id='buttonFirstColorSelect'
      >
        <option value={JSON.stringify({ color: 'white' })}>
          Velg farge...
        </option>
        {generateColorScaleOptions(state)}
      </NativeSelect>
    </div>
  );
};

export default ButtonFirstColorSelect;
