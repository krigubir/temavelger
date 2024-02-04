import { useState } from 'react';
import generateColorScaleHSL from '../../utils/generateColorScaleHSL';
import ColorGenerator from '../ColorGenerator/ColorGenerator';
import styles from './ActionColorPicker.module.css';

interface ActionColorPickerProps {
  variant: string;
}

const ActionColorPicker: React.FC<ActionColorPickerProps> = ({ variant }) => {
  const [colorScale, setColorScale] = useState<string[]>(
    generateColorScaleHSL('#00315D', 9 || '#ffffff'),
  );
  const changeActionColor = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newColorScale = generateColorScaleHSL(e.target.value, 9);
    setColorScale(newColorScale);

    document.documentElement.style.setProperty(
      `--fds-semantic-surface-action-${variant.toLowerCase()}-default`,
      e.target.value,
    );
    document.documentElement.style.setProperty(
      `--fds-semantic-surface-action-${variant.toLowerCase()}-hover`,
      colorScale[3],
    );
    document.documentElement.style.setProperty(
      `--fds-semantic-surface-action-first-active`,
      colorScale[2],
    );
  };

  return (
    <div className={styles.actionColorPicker}>
      <label
        htmlFor='actionColorPicker'
        className={styles.legend}
      >{`Hvilken farge skal brukes for Action ${variant}?`}</label>
      <input
        id='actionColorPicker'
        className={styles.actionColorPickerInput}
        name='actionColorPicker'
        type='color'
        value={colorScale[4]}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          changeActionColor(e)
        }
      />
      <ColorGenerator colorScale={colorScale.slice(0, 5)}></ColorGenerator>
    </div>
  );
};
export default ActionColorPicker;
