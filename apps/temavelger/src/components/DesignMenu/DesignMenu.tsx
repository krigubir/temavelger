import { HelpText, Button } from '@digdir/designsystemet-react';
import { PlusIcon } from '@navikt/aksel-icons';

import { useReducerContext } from '../../contexts/useReducerContext';
import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  RESET_ALL_COLOR_PICKER_DATA,
} from '../../reducer/actions';
import BorderRadiusSelect from '../BorderRadiusSelect/BorderRadiusSelect';
import CodeGenerator from '../CodeGenerator/CodeGenerator';
import ColorPicker from '../ColorPicker/ColorPicker';
import DesignMenuHeader from '../DesignMenuHeader/DesignMenuHeader';
import FontFamilySelector from '../FontFamilySelect/FontFamilySelect';
import ButtonFirstColorSelect from '../ButtonFirstColorSelect/ButtonFirstColorSelect';
import ButtonSecondColorSelect from '../ButtonSecondColorSelect/ButtonSecondColorSelect';
import FormElementsColorSelect from '../FormElementsColorSelect/FormElementsColorSelect';
import { resetBrandColorData } from '../../utils/resetBrandColorData';

import styles from './DesignMenu.module.css';

/*
  Responsible for:
   - rendering the design menu
   - adding and removing color pickers
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
    resetBrandColorData();
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
