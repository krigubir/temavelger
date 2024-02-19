import { useState } from 'react';
import styles from './ColorPicker.module.css';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import checkColorContrast from '../../utils/checkColorContrast';
import { useColorScale } from '../../contexts/useColorScale';

interface ColorPickerProps {
  token: string;
  initialColor: string;
  altColorNumber: number;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  token,
  initialColor,
  altColorNumber,
}) => {
  const { updateColorScale } = useColorScale();
  const [colorScale, setColorScale] = useState<string[]>(
    generateColorScaleHSL(initialColor, 9),
  );

  // Update color-scale and brand-color
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColorScale = generateColorScaleHSL(e.target.value, 9);
    updateColorScale(Number(altColorNumber), newColorScale); // used in code-generator
    setColorScale(newColorScale);

    // change semantic-surface color
    document.documentElement.style.setProperty(token, newColorScale[2]);

    // change the brand-alt colors
    for (let i = 1; i <= newColorScale.length; i++) {
      document.documentElement.style.setProperty(
        `--fds-brand-alt${altColorNumber}-${i * 100}`,
        newColorScale[i - 1],
      );
    }

    // change the color of the text in the components
    document.documentElement.style.setProperty(
      '--fds-semantic-text-neutral-default',
      checkColorContrast(newColorScale[1]) ? 'black' : 'white',
    );
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
