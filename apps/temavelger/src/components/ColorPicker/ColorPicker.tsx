import { useState } from 'react';
import { useDesignTokenContext } from '../../layouts/ComponentsDesignLayout/ComponentDesignContext';
import styles from './ColorPicker.module.css';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import generateColorScale from '../../utils/generateColorScale';
import checkColorContrast from '../../utils/checkColorContrast';

interface ColorPickerProps {
  token: string;
  initialColor: string;
  altColorNumber: string;
}

const ColorPicker: React.FC<ColorPickerProps> = ({
  token,
  initialColor,
  altColorNumber,
}) => {
  const [colorScale, setColorScale] = useState<string[]>(
    generateColorScale(initialColor || '#ffffff'),
  );

  // part of the necessary logic to generate the design-tokens
  const { setTokenValue } = useDesignTokenContext();

  const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setColorScale(generateColorScale(e.target.value));
    // change the color of the elements
    document.documentElement.style.setProperty(token, colorScale[1]);
    document.documentElement.style.setProperty(
      '--fds-semantic-text-neutral-default',
      checkColorContrast(colorScale[1]) ? 'black' : 'white',
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-100`,
      colorScale[0],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-200`,
      colorScale[1],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-300`,
      colorScale[2],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-400`,
      colorScale[3],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-500`,
      colorScale[4],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-600`,
      colorScale[5],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-700`,
      colorScale[6],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-800`,
      colorScale[7],
    );
    document.documentElement.style.setProperty(
      `--fds-brand-alt${altColorNumber}-900`,
      colorScale[8],
    );
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
