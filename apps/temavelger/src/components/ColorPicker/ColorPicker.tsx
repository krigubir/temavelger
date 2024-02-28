import { useState } from 'react';
import styles from './ColorPicker.module.css';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import checkColorContrast from '../../utils/checkColorContrast';
import { useColorScale } from '../../contexts/useColorScale';
import { XMarkIcon } from '@navikt/aksel-icons';
import { Button } from '@digdir/design-system-react';

interface ColorPickerProps {
  token: string;
  initialColorScale: string[];
  altColorNumber: number;
  removable: boolean;
  removeColorPicker?: (altColorNumber: number) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  token,
  initialColorScale,
  altColorNumber,
  removable,
  removeColorPicker,
}) => {
  const { updateColorScales } = useColorScale();
  const [colorScale, setColorScale] = useState<string[]>(initialColorScale);

  // Update color-scale and brand-color
  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColorScale = generateColorScaleHSL(e.target.value, 9);
    updateColorScales(Number(altColorNumber), newColorScale); // used in code-generator
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

  const handleRemoveColorPicker = () => {
    updateColorScales(altColorNumber, []);
    if (removeColorPicker) {
      removeColorPicker(altColorNumber);
    }
  };

  return (
    <div className={styles.colorPicker}>
      <div className={styles.colorPickerInputContainer}>
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

        {removable && (
          <Button
            className={styles.removeColorPickerButton}
            onClick={handleRemoveColorPicker}
            color='inverted'
            size='small'
          >
            <XMarkIcon
              title='a11y-title'
              fontSize='2rem'
            />
          </Button>
        )}
      </div>

      <ColorGenerator colorScale={colorScale}></ColorGenerator>
    </div>
  );
};
export default ColorPicker;
