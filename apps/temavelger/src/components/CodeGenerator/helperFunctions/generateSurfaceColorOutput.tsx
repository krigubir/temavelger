import {
  getSurfaceFirstColorTokens,
  getSurfaceSecondColorTokens,
  getSurfaceThirdColorTokens,
} from '../../../data/designTokens';
import type { State } from '../../../reducer/reducer';
import styles from '../CodeGenerator.module.css';

const generateSurfaceColorOutput = (state: State) => {
  if (state.surfaceColorData.length === 0) return;
  const output: JSX.Element[] = [];

  for (let i = 0; i < state.surfaceColorData.length; i++) {
    const { chosenColorIndex, altColorNumber } = state.surfaceColorData[i];
    if (altColorNumber === 1) {
      const tokenList = getSurfaceFirstColorTokens(chosenColorIndex);
      for (const token in tokenList) {
        output.push(
          <div key={token}>
            <span className={styles.tokenName}>{token}: </span>
            <span className={styles.tokenValue}>
              {state.colorPickerList[altColorNumber - 1].colorScale[
                tokenList[token]
              ].toUpperCase()}
            </span>
          </div>,
        );
      }
    }

    if (altColorNumber === 2) {
      const tokenList = getSurfaceSecondColorTokens(chosenColorIndex);
      for (const token in tokenList) {
        output.push(
          <div key={token}>
            <span className={styles.tokenName}>{token}: </span>
            <span className={styles.tokenValue}>
              {state.colorPickerList[altColorNumber - 1].colorScale[
                tokenList[token]
              ].toUpperCase()}
            </span>
          </div>,
        );
      }
    }

    if (altColorNumber === 3) {
      const tokenList = getSurfaceThirdColorTokens(chosenColorIndex);
      for (const token in tokenList) {
        output.push(
          <div key={token}>
            <span className={styles.tokenName}>{token}: </span>
            <span className={styles.tokenValue}>
              {state.colorPickerList[altColorNumber - 1].colorScale[
                tokenList[token]
              ].toUpperCase()}
            </span>
          </div>,
        );
      }
    }
  }
  return output;
};

export default generateSurfaceColorOutput;
