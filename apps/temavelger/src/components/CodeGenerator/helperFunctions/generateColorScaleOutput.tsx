import { JSX } from 'react/jsx-runtime';
import { State } from '../../../contexts/ReducerContext';
import styles from '../CodeGenerator.module.css';

const generateColorScaleOutput = (state: State) => {
  const output: JSX.Element[] = [];
  state.colorScales.map((value, key) =>
    output.push(
      <div key={key}>
        {value.colorScale.map((color, index) => (
          <div key={index}>
            <span className={styles.tokenName}>
              --fds-brand-alt{value.altColorNumber}-{(index + 1) * 100}:
            </span>{' '}
            <span className={styles.tokenValue}>{color.toUpperCase()};</span>
          </div>
        ))}
        <br />
      </div>,
    ),
  );
  return output;
};

export default generateColorScaleOutput;
