import { HelpText, Button } from '@digdir/designsystemet-react';
import { useReducerContext } from '../../contexts/useReducerContext';
import {
  ADD_COLOR_PICKER,
  REMOVE_COLOR_PICKER,
  REMOVE_COLOR_SCALE,
} from '../../reducer/actions';
import ActionColorPicker from '../ActionColorPicker/ActionColorPicker';
import BorderRadiusSelect from '../BorderRadiusSelect/BorderRadiusSelect';
import CodeGenerator from '../CodeGenerator/CodeGenerator';
import ColorPicker from '../ColorPicker/ColorPicker';
import DesignMenuHeader from '../DesignMenuHeader/DesignMenuHeader';
import FontFamilySelector from '../FontFamilySelect/FontFamilySelect';
import styles from './DesignMenu.module.css';

const DesignMenu = () => {
  const { state, dispatch } = useReducerContext();

  const addNewColorPicker = () => {
    dispatch({ type: ADD_COLOR_PICKER });
  };

  const removeColorPicker = (altColorNumber: number) => {
    dispatch({ type: REMOVE_COLOR_PICKER, payload: altColorNumber });
    dispatch({ type: REMOVE_COLOR_SCALE, payload: altColorNumber });
  };

  return (
    <div className={styles.designMenu}>
      <DesignMenuHeader></DesignMenuHeader>
      <div className={styles.designMenuBox}>
        <HelpText
          className={styles.helpText}
          size='small'
          title='Select brand colors'
          placement='right'
          portal={true}
        >
          {
            'Her kan du velge farger for ditt brand. Fargene du velger her vil bli brukt i designet av komponentene dine. '
          }
        </HelpText>
        {state.colorPickerList.map((colorPicker, index) => (
          <div
            className={styles.colorPickerContainer}
            key={index}
          >
            <ColorPicker
              key={index}
              initialColorScale={colorPicker.colorScale}
              altColorNumber={colorPicker.altColorNumber}
            ></ColorPicker>

            {colorPicker.removable && (
              <Button
                variant='secondary'
                onClick={() => removeColorPicker(colorPicker.altColorNumber)}
                size='small'
              >
                Fjern farge
              </Button>
            )}
          </div>
        ))}
        <div className={styles.addColorPickerButton}>
          <Button
            variant='primary'
            onClick={addNewColorPicker}
            size='small'
          >
            Legg til farge
          </Button>
        </div>
      </div>
      <div className={styles.designMenuBox}>
        <ActionColorPicker
          variant={'First'}
          actionType={'Button'}
        ></ActionColorPicker>
        <ActionColorPicker
          variant={'Second'}
          actionType={'Button'}
        ></ActionColorPicker>
        <ActionColorPicker
          variant={''}
          actionType={'Form Elements'}
        ></ActionColorPicker>
      </div>
      <div className={styles.designMenuBox}>
        <BorderRadiusSelect></BorderRadiusSelect>
      </div>
      <div className={styles.designMenuBox}>
        <FontFamilySelector></FontFamilySelector>
      </div>
      <div className={styles.designMenuBox}>
        <CodeGenerator></CodeGenerator>
      </div>
    </div>
  );
};
export default DesignMenu;
