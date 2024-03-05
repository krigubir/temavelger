import ActionColorPicker from '../../components/ActionColorPicker/ActionColorPicker';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import { Button, HelpText } from '@digdir/design-system-react';
import BorderRadiusSelect from '../../components/BorderRadiusSelect/BorderRadiusSelect';
import FontFamilySelector from '../../components/FontFamilySelector/FontFamilySelector';
import DesignMenuHeader from '../../components/DesignMenuHeader/DesignMenuHeader';
import { ADD_COLOR_PICKER, REMOVE_COLOR_PICKER } from '../../reducer/actions';
import { useReducerContext } from '../../contexts/useReducerContext';

const ComponentDesignLayout = () => {
  const { state, dispatch } = useReducerContext();

  const addNewColorPicker = () => {
    dispatch({ type: ADD_COLOR_PICKER });
  };

  const removeColorPicker = (altColorNumber: number) => {
    dispatch({ type: REMOVE_COLOR_PICKER, payload: altColorNumber });
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
        <ActionColorPicker variant={'First'}></ActionColorPicker>
        <ActionColorPicker variant={'Second'}></ActionColorPicker>
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
export default ComponentDesignLayout;
