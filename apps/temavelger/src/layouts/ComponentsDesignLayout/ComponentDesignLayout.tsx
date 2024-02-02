import { useState } from 'react';
import ActionColorSelect from '../../components/ActionColorSelect/ActionColorSelect';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import { Button } from '@digdir/design-system-react';
import colorPickerData from '../../data/colorPickerData';
import { ColorScaleProvider } from '../../contexts/ColorScaleContext';

const ComponentDesignLayout = () => {
  const [colorPickerList, setColorPickerList] = useState(colorPickerData);

  const addNewColorPicker = () => {
    const newColorPicker = {
      token: '',
      initialColor: '#8f8f8f8f',
      altColorNumber: colorPickerList.length + 1,
    };
    setColorPickerList([...colorPickerList, newColorPicker]);
  };

  return (
    <ColorScaleProvider>
      <aside className={styles.designMenuContainer}>
        <h1 style={{ marginBottom: '1rem', fontSize: '2em' }}>Temavelger</h1>
        <div className={styles.colorPickerMenu}>
          {colorPickerList.map((colorPicker, index) => (
            <ColorPicker
              key={index}
              token={colorPicker.token}
              initialColor={colorPicker.initialColor}
              altColorNumber={colorPicker.altColorNumber}
            ></ColorPicker>
          ))}
          <div className={styles.addColorPickerButton}>
            <Button
              variant='secondary'
              onClick={() => addNewColorPicker()}
            >
              Legg til farge
            </Button>
          </div>
        </div>

        <ActionColorSelect></ActionColorSelect>
        <CodeGenerator></CodeGenerator>
      </aside>
    </ColorScaleProvider>
  );
};
export default ComponentDesignLayout;
