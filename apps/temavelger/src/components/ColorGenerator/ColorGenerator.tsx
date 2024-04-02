import { useEffect, useState } from 'react';

import checkColorContrast from '../../utils/checkColorContrast';

import styles from './ColorGenerator.module.css';
import { updateSurfaceColorTokens } from '../../utils/updateColorTokens';
import { useReducerContext } from '../../contexts/useReducerContext';
import { UPDATE_SURFACE_COLOR_DATA } from '../../reducer/actions';

interface ColorGeneratorProps {
  colorScale: string[];
  altColorNumber: number;
}

const ColorGenerator: React.FC<ColorGeneratorProps> = ({
  colorScale,
  altColorNumber,
}) => {
  const [successFullCopy, setSuccessFullCopy] = useState(false);
  const [validColor, setValidColor] = useState(true);
  const { dispatch } = useReducerContext();

  useEffect(() => {
    for (let i = 1; i < colorScale.length - 1; i++) {
      if (colorScale[i] === '#ffffff' || colorScale[i] === '#000000') {
        setValidColor(false);
        return;
      }
    }
    setValidColor(true);
  }, [colorScale]);

  const handleColorBoxClick = (
    event:
      | React.KeyboardEvent<HTMLDivElement>
      | React.MouseEvent<HTMLDivElement>,
    color: string,
    chosenColorIndex: number,
  ): void => {
    // copy color to clipboard
    event.preventDefault();
    navigator.clipboard
      .writeText(color)
      .then(() => {
        setSuccessFullCopy(true);
      })
      .catch((error: Error) => {
        console.error('Failed to write text to clipboard:', error);
      });

    dispatch({
      type: UPDATE_SURFACE_COLOR_DATA,
      payload: { chosenColorIndex, altColorNumber },
    });

    // change surface color
    updateSurfaceColorTokens(colorScale, altColorNumber, chosenColorIndex);
  };

  return (
    <div className={styles.colorGeneratorWrapper}>
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
              style={{
                backgroundColor: color,
                boxShadow:
                  (color === '#ffffff' || color === '#000000') &&
                  index !== 0 &&
                  index !== 8
                    ? 'inset 0 0 0 1px var(--fds-semantic-surface-danger-default)'
                    : 'none',
              }}
              role='button'
              tabIndex={0}
              onClick={(event) => handleColorBoxClick(event, color, index)}
              onKeyDown={(event) => {
                if (event.key === 'Enter') {
                  handleColorBoxClick(event, color, index);
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
                {successFullCopy ? 'copied' : color}
              </div>
            </div>

            <div
              className={styles.colorNumber}
              style={{
                color:
                  (color === '#ffffff' || color === '#000000') &&
                  index !== 0 &&
                  index !== 8
                    ? 'var(--fds-semantic-surface-danger-default)'
                    : 'black',
              }}
            >{`${index + 1}00`}</div>
          </div>
        ))}
      </div>
      <section
        className={styles.errorMessage}
        style={{
          color: validColor
            ? 'white'
            : 'var(--fds-semantic-surface-danger-default)',
        }}
      >
        Vurder å velge en annen grunnfarge
      </section>
    </div>
  );
};
export default ColorGenerator;
