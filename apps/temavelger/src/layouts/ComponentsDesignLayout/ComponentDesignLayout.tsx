import { useState } from 'react';
import ActionColorPicker from '../../components/ActionColorPicker/ActionColorPicker';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import { Button, HelpText } from '@digdir/design-system-react';
import colorPickerData from '../../data/colorPickerData';
import { ColorScaleProvider } from '../../contexts/ColorScaleContext';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import BorderRadiusSelect from '../../components/BorderRadiusSelect/BorderRadiusSelect';
import FontFamilySelector from '../../components/FontFamilySelector/FontFamilySelector';

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
      <div className={styles.designMenu}>
        <div className={styles.designMenuHeader}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='219'
            height='2'
            viewBox='0 0 219 2'
            fill='none'
          >
            <line
              x1='8.74228e-08'
              y1='1'
              x2='219'
              y2='1.00002'
              stroke='#D2D5D8'
              strokeWidth='2'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='46'
            height='12'
            viewBox='0 0 46 12'
            fill='none'
          >
            <rect
              width='12'
              height='12'
              rx='6'
              fill='#7DB5A5'
            />
            <rect
              x='17'
              width='12'
              height='12'
              rx='6'
              fill='#FFB178'
            />
            <rect
              x='34'
              width='12'
              height='12'
              rx='6'
              fill='#7D81DB'
            />
          </svg>
          <h1>Temavelger</h1>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='46'
            height='12'
            viewBox='0 0 46 12'
            fill='none'
          >
            <rect
              width='12'
              height='12'
              rx='6'
              fill='#7D81DB'
            />
            <rect
              x='17'
              width='12'
              height='12'
              rx='6'
              fill='#FFB178'
            />
            <rect
              x='34'
              width='12'
              height='12'
              rx='6'
              fill='#7DB5A5'
            />
          </svg>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='219'
            height='2'
            viewBox='0 0 219 2'
            fill='none'
          >
            <line
              x1='8.74228e-08'
              y1='1'
              x2='219'
              y2='1.00002'
              stroke='#D2D5D8'
              strokeWidth='2'
            />
          </svg>
        </div>
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
    </ColorScaleProvider>
  );
};
export default ComponentDesignLayout;
