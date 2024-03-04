import ActionColorPicker from '../../components/ActionColorPicker/ActionColorPicker';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import { Button, HelpText } from '@digdir/design-system-react';
import colorPickerData from '../../data/colorPickerData';
import { DataProvider } from '../../contexts/DataContext';
import BorderRadiusSelect from '../../components/BorderRadiusSelect/BorderRadiusSelect';
import FontFamilySelector from '../../components/FontFamilySelector/FontFamilySelector';
import DesignMenuHeader from '../../components/DesignMenuHeader/DesignMenuHeader';
import { useReducer } from 'react';
import reducer from '../../reducer/reducer';
import { ADD_COLOR_PICKER } from '../../reducer/actions';

const defaultState = {
  colorPickerList: colorPickerData,
  colorScales: [],
  actionColorScales: [],
  borderRadius: [],
  fontFamily: [],
};

const ComponentDesignLayout = () => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const addNewColorPicker = () => {
    dispatch({ type: ADD_COLOR_PICKER });
  };

  // const removeColorPicker = (altColorNumber: number) => {
  //   dispatch({ type: REMOVE_COLOR_PICKER, payload: altColorNumber });
  // };

  return (
    <DataProvider>
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
            <ColorPicker
              key={index}
              token={colorPicker.token}
              initialColorScale={colorPicker.colorScale}
              altColorNumber={colorPicker.altColorNumber}
            ></ColorPicker>
          ))}
          <div className={styles.addColorPickerButton}>
            <Button
              variant='secondary'
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
    </DataProvider>
  );
};
export default ComponentDesignLayout;
