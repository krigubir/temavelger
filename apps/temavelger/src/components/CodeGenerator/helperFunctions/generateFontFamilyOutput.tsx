import type { State } from '../../../reducer/reducer';
import styles from '../CodeGenerator.module.css';

const generateFontFamilyOutput = (state: State) => {
  const output: JSX.Element[] = [];

  output.push(
    <div key='font-family'>
      <span className={styles.tokenName}>font-family:</span>
      <span className={styles.tokenValue}>{state.fontFamilyData};</span>
      <br />
    </div>,
  );
  return output;
};

export default generateFontFamilyOutput;
