import { useState } from 'react';
import ActionColorSelect from '../../components/ActionColorSelect/ActionColorSelect';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import { Button } from '@digdir/design-system-react';
import colorPickerData from '../../data/colorPickerData';

const ComponentDesignLayout = () => {
  const [colorPicker, setColorPicker] = useState(colorPickerData);

  const addColorPicker = () => {
    const newColorPicker = {
      token: '',
      initialColor: '#ffffff',
      altColorNumber: `{tokenList.length + 1}`,
    };
    setColorPicker([...colorPicker, newColorPicker]);
  };

  return (
    <aside className={styles.designMenuContainer}>
      <h1 style={{ marginBottom: '1rem', fontSize: '2em' }}>Temavelger</h1>
      <div className={styles.colorPickerMenu}>
        {colorPicker.map((colorPicker, index) => (
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
            onClick={() => addColorPicker()}
          >
            Legg til farge
          </Button>
        </div>
      </div>

      <ActionColorSelect></ActionColorSelect>
      <CodeGenerator></CodeGenerator>
    </aside>
  );
};
export default ComponentDesignLayout;
