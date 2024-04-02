import { getBorderRadiusTokens } from '../../../data/designTokens';
import type { State } from '../../../reducer/reducer';
import styles from '../CodeGenerator.module.css';

const generateBorderRadiusOutput = (state: State) => {
  if (state.borderRadiusData === 0) return;

  const tokenList = getBorderRadiusTokens();
  const output: JSX.Element[] = [];
  for (const token of tokenList) {
    output.push(
      <div key={token}>
        <span className={styles.tokenName}>{token}: </span>
        <span
          className={styles.tokenValue}
        >{`${state.borderRadiusData}px;`}</span>
      </div>,
    );
  }
  output.push(<br key='borderRadius'></br>);
  return output;
};

export default generateBorderRadiusOutput;
