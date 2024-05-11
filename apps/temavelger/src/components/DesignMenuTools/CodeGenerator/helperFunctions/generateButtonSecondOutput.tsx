import type { State } from '../../../../contexts/ReducerContext';
import { getButtonSecondTokens } from '../../../../data/designTokens';
import styles from '../CodeGenerator.module.css';

const generateButtonSecondOutput = (state: State) => {
  if (state.buttonSecondData.actionColorScale.length === 0) return;
  const tokenList = getButtonSecondTokens(
    state.buttonSecondData.chosenColorIndex,
  );
  const output = [];
  for (const token in tokenList) {
    output.push(
      <div key={token}>
        <span className={styles.tokenName}>{token}: </span>
        <span className={styles.tokenValue}>
          {state.buttonSecondData.actionColorScale[tokenList[token]]};
        </span>
      </div>,
    );
  }
  output.push(<br key='buttonSecond'></br>);
  return output;
};

export default generateButtonSecondOutput;
