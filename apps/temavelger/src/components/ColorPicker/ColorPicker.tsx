import { useState } from 'react';
import { useDesignTokenContext } from '../../layouts/ComponentsDesignLayout/ComponentDesignContext';
import styles from './ColorPicker.module.css';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScale from '../../utils/generateColorScale';

interface ColorPickerProps {
  token: string;
  initialColor: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ token, initialColor }) => {
  const [colorScale, setColorScale] = useState<string[]>(
    generateColorScale(initialColor || '#ffffff'),
  );

  // part of the necessary logic to generate the design-tokens
  const { setTokenValue } = useDesignTokenContext();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorScale(generateColorScale(e.target.value));
    // change the color of the elements
    document.documentElement.style.setProperty(token, e.target.value);
    // update the designTokenContext
    setTokenValue(token, e?.target.value);
  };

  return (
    <div className={styles.colorPicker}>
      <input
        id='colorPicker'
        className={styles.colorPickerInput}
        name='colorPicker'
        type='color'
        value={colorScale[4]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleColorChange(e)
        }
      />
      <ColorGenerator colorScale={colorScale}></ColorGenerator>
    </div>
  );
};
export default ColorPicker;
