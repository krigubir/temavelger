import { State } from '../../../contexts/ReducerContext';
import { getFormElementTokens } from '../../../data/designTokens';
import styles from '../CodeGenerator.module.css';

const generateFormElementOutput = (state: State) => {
  if (state.formElementsData.actionColorScale.length === 0) return;
  const tokenList = getFormElementTokens(
    state.formElementsData.chosenColorIndex,
  );
  const output = [];
  for (const token in tokenList) {
    output.push(
      <div key={token}>
        <span className={styles.tokenName}>{token}: </span>
        <span className={styles.tokenValue}>
          {state.formElementsData.actionColorScale[tokenList[token]]};
        </span>
      </div>,
    );
  }
  output.push(<br></br>);
  return output;
};

export default generateFormElementOutput;
