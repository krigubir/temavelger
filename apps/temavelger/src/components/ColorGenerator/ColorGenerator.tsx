import { useState } from 'react';

import checkColorContrast from '../../utils/checkColorContrast';

import styles from './ColorGenerator.module.css';

interface ColorGeneratorProps {
  colorScale: string[];
}

const ColorGenerator: React.FC<ColorGeneratorProps> = ({ colorScale }) => {
  const [successFullCopy, setSuccessFullCopy] = useState(false);

  const copyColorToClipboard = (
    event:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement>,
    color: string,
  ): void => {
    event.preventDefault();
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setSuccessFullCopy(true);
      })
      .catch((error: Error) => {
        console.error('Failed to write text to clipboard:', error);
      });
  };

  return (
    <div className={styles.colorGenerator}>
      {colorScale.map((color: string, index: number) => (
        <div
          key={index}
          className={styles.colorGeneratorContainer}
        >
          <div
            className={
              index === 4 ? styles.highlightedColorBox : styles.colorBox
            }
            style={{ backgroundColor: color }}
            role='button'
            tabIndex={0}
            onClick={(event) => copyColorToClipboard(event, color)}
            onKeyDown={(event) => {
              if (event.key === 'Enter') {
                copyColorToClipboard(event, color);
              }
            }}
            onMouseLeave={() => setSuccessFullCopy(false)}
          >
            <div
              className={styles.colorInfo}
              style={{
                background: color,
                color: checkColorContrast(color) ? 'black' : 'white',
                border: color === '#ffffff' ? '1px solid grey' : 'none',
              }}
            >
              {successFullCopy ? 'copied!' : color}
            </div>
          </div>

          <div className={styles.colorNumber}>{`${index + 1}00`}</div>
        </div>
      ))}
    </div>
  );
};
export default ColorGenerator;
