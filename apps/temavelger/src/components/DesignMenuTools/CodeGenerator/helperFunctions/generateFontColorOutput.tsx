import type { State } from '../../../../reducer/reducer';
import styles from '../CodeGenerator.module.css';

const generateFontColorOutput = (state: State) => {
  if (state.fontColor === '') return;

  const output: JSX.Element[] = [];
  output.push(
    <div key='fontColor'>
      <span className={styles.tokenName}>
        --fds-semantic-text-neutral-default:
      </span>{' '}
      <span className={styles.tokenValue}>
        {state.fontColor.toUpperCase()};
      </span>
    </div>,
  );
  return output;
};

export default generateFontColorOutput;
