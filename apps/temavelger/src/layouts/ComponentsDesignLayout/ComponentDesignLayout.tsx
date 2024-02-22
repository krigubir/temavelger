import { useState } from 'react';
import ActionColorPicker from '../../components/ActionColorPicker/ActionColorPicker';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import { Button } from '@digdir/design-system-react';
import colorPickerData from '../../data/colorPickerData';
import { ColorScaleProvider } from '../../contexts/ColorScaleContext';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import BorderRadiusSelect from '../../components/BorderRadiusSelect/BorderRadiusSelect';

const ComponentDesignLayout = () => {
  const [colorPickerList, setColorPickerList] = useState(colorPickerData);

  const addNewColorPicker = () => {
    const newColorPicker = {
      token: '',
      initialColorScale: generateColorScaleHSL('#919191', 9),
      altColorNumber: colorPickerList.length + 1,
    };
    setColorPickerList([...colorPickerList, newColorPicker]);
  };

  return (
    <ColorScaleProvider>
      <div className={styles.componentsDesignContainer}>
        <h1 style={{ marginBottom: '1rem', fontSize: '2em' }}>Temavelger</h1>
        <div className={styles.colorPickerMenu}>
          {colorPickerList.map((colorPicker, index) => (
            <ColorPicker
              key={index}
              token={colorPicker.token}
              initialColorScale={colorPicker.initialColorScale}
              altColorNumber={colorPicker.altColorNumber}
            ></ColorPicker>
          ))}
          <div className={styles.addColorPickerButton}>
            <Button
              variant='secondary'
              onClick={() => addNewColorPicker()}
              size='small'
            >
              Legg til farge
            </Button>
          </div>
        </div>
        <div className={styles.actionColorPickerMenu}>
          <ActionColorPicker variant={'First'}></ActionColorPicker>
          <ActionColorPicker variant={'Second'}></ActionColorPicker>
        </div>
        <div className={styles.borderRadiusMenu}>
          <BorderRadiusSelect></BorderRadiusSelect>
        </div>
        <CodeGenerator></CodeGenerator>
      </div>
    </ColorScaleProvider>
  );
};
export default ComponentDesignLayout;
