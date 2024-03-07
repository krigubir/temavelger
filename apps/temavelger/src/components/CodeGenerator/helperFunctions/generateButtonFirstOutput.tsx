import { State } from '../../../contexts/ReducerContext';
import { getButtonFirstTokens } from '../../../data/designTokens';
import styles from '../CodeGenerator.module.css';

const generateButtonFirstOutput = (state: State) => {
  if (state.buttonFirstData.actionColorScale.length === 0) return;
  const tokenList = getButtonFirstTokens(
    state.buttonFirstData.chosenColorIndex,
  );
  const output = [];
  for (const token in tokenList) {
    output.push(
      <div key={token}>
        <span className={styles.tokenName}>{token}: </span>
        <span className={styles.tokenValue}>
          {state.buttonFirstData.actionColorScale[tokenList[token]]};
        </span>
      </div>,
    );
  }
  output.push(<br></br>);
  return output;
};

export default generateButtonFirstOutput;
