import { HelpText, Button, Radio } from '@digdir/designsystemet-react';
import { PlusIcon } from '@navikt/aksel-icons';

import { useReducerContext } from '../../contexts/useReducerContext';
import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  RESET_ALL_COLOR_PICKER_DATA,
  RESET_ALL_SURFACE_COLOR_DATA,
  UPDATE_FONT_COLOR_DATA,
} from '../../reducer/actions';
import BorderRadiusSelect from '../DesignMenuTools/BorderRadiusSelect/BorderRadiusSelect';
import CodeGenerator from '../DesignMenuTools/CodeGenerator/CodeGenerator';
import ColorPicker from '../DesignMenuTools/ColorPicker/ColorPicker';
import DesignMenuHeader from '../DesignMenuHeader/DesignMenuHeader';
import FontFamilySelector from '../DesignMenuTools/FontFamilySelect/FontFamilySelect';
import ButtonFirstColorSelect from '../DesignMenuTools/ButtonFirstColorSelect/ButtonFirstColorSelect';
import ButtonSecondColorSelect from '../DesignMenuTools/ButtonSecondColorSelect/ButtonSecondColorSelect';
import FormElementsColorSelect from '../DesignMenuTools/FormElementsColorSelect/FormElementsColorSelect';
import {
  resetBrandColorData,
  resetSurfaceColorData,
} from '../../utils/resetBrandColorData';

import styles from './DesignMenu.module.css';

/*
  This component is the main container for all design tools.
  It contains the following components:
    - ColorPicker
    - ButtonFirstColorSelect
    - ButtonSecondColorSelect
    - FormElementsColorSelect
    - BorderRadiusSelect
    - FontFamilySelector
    - CodeGenerator
*/

const DesignMenu = () => {
  const { state, dispatch } = useReducerContext();

  const addNewColorPicker = () => {
    dispatch({ type: ADD_COLOR_PICKER });
  };

  const removeColorPicker = (altColorNumber: number) => {
    dispatch({ type: REMOVE_COLOR_PICKER, payload: altColorNumber });
  };

  const resetSettings = () => {
    dispatch({ type: RESET_ALL_COLOR_PICKER_DATA });
    dispatch({ type: RESET_ALL_SURFACE_COLOR_DATA });
    resetBrandColorData();
    resetSurfaceColorData();
  };

  const changeFontColor = (color: string) => {
    document.documentElement.style.setProperty(
      '--fds-semantic-text-neutral-default',
      color,
    );

    dispatch({ type: UPDATE_FONT_COLOR_DATA, payload: color });
  };

  return (
    <div className={styles.designMenu}>
      <DesignMenuHeader></DesignMenuHeader>
      <div className={styles.designMenuBox}>
        <div className={styles.colorPickerHeader}>
          <HelpText
            className={styles.helpText}
            size='small'
            title='Select brand colors'
            placement='top-start'
            portal={true}
          >
            {
              'Bruk fargevelgeren til å velge farger som representerer ditt brand, eller utforsk nye. Valgene vil utgjøre fargepaletten din og være tilgjengelig når du skal velge farger for knapper og andre form-elementer.'
            }
          </HelpText>
          <Button
            variant='tertiary'
            size='medium'
            onClick={resetSettings}
            className={styles.resetButton}
          >
            nullstill
          </Button>
        </div>
        {state.colorPickerList.map((colorPicker, index) => (
          <div key={index}>
            <ColorPicker
              key={index}
              initialColorScale={colorPicker.colorScale}
              altColorNumber={colorPicker.altColorNumber}
              removable={colorPicker.removable}
              removeColorPicker={removeColorPicker}
            ></ColorPicker>
          </div>
        ))}
        <div className={styles.addColorPickerButton}>
          <Button
            variant='primary'
            onClick={addNewColorPicker}
            size='small'
          >
            <PlusIcon
              title='a11y-title'
              fontSize='3rem'
            />
            Legg til farge
          </Button>
        </div>
      </div>
      <div className={styles.designMenuBox}>
        <div className={styles.radioGroup}>
          <Radio.Group
            error=''
            legend='Velg font farge'
            onChange={(color: string) => changeFontColor(color)}
            size='medium'
            inline={true}
          >
            <div className={styles.radio}>
              <Radio value='#1e2b3c'>Mørk</Radio>
            </div>
            <div className={styles.radio}>
              <Radio value='#ffffff'>Lys</Radio>
            </div>
          </Radio.Group>
        </div>
      </div>
      <div className={styles.designMenuBox}>
        <ButtonFirstColorSelect></ButtonFirstColorSelect>
        <ButtonSecondColorSelect></ButtonSecondColorSelect>
        <FormElementsColorSelect></FormElementsColorSelect>
      </div>
      <div className={styles.designMenuBox}>
        <BorderRadiusSelect></BorderRadiusSelect>
      </div>
      <div className={styles.designMenuBox}>
        <FontFamilySelector></FontFamilySelector>
      </div>
      <div className={styles.designMenuCodeGenerator}>
        <CodeGenerator></CodeGenerator>
      </div>
    </div>
  );
};
export default DesignMenu;
