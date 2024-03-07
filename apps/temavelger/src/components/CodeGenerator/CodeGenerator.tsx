import { Button, Modal } from '@digdir/design-system-react';
import { useRef } from 'react';
import styles from './CodeGenerator.module.css';
import { useReducerContext } from '../../contexts/useReducerContext';
import { getButtonFirstTokens } from '../../data/designTokens';

const CodeGenerator = () => {
  // const { colorScales } = useColorScale();
  const { state } = useReducerContext();
  const modalRef = useRef<HTMLDialogElement>(null);

  const mapButtonFirstTokens = () => {
    if (state.buttonFirstData === undefined) return;
    const tokenList = getButtonFirstTokens(
      state.buttonFirstData.chosenColorIndex,
    );
    const output = [];
    for (const token in tokenList) {
      output.push(
        <div key={token}>
          <span className={styles.tokenName}>{token}: </span>
          <span className={styles.tokenValue}>
            {state.buttonFirstData.buttonFirstColorScale[tokenList[token]]};
          </span>
        </div>,
      );
    }
    return output;
  };

  // const generateTokenOutput = () => {
  //   let tokenOutput = ':root {\n';
  //   Object.entries(colorScales).forEach(([key, value]) => {
  //     value.forEach((color, index) => {
  //       tokenOutput += `  --fds-brand-alt${key}-${
  //         (index + 1) * 100
  //       }: ${color};\n`;
  //     });
  //     tokenOutput += '\n';
  //   });
  //   tokenOutput += '}';
  //   return tokenOutput;
  // };

  // const copyToClipboard = () => {
  //   const codeGeneratorOutput = generateTokenOutput();
  //   navigator.clipboard.writeText(codeGeneratorOutput).then(() => {
  //     alert('CSS copied to clipboard!');
  //   });
  // };
  return (
    <div className={styles.generateCodeButton}>
      <Button
        onClick={() => modalRef.current?.showModal()}
        style={{ background: '#00315D' }}
      >
        Copy code
      </Button>
      <Modal
        ref={modalRef}
        onInteractOutside={() => modalRef.current?.close()}
      >
        <Modal.Header>Design-tokens</Modal.Header>
        <div className={styles.copyToClipboard}>
          <Button
            size='small'
            variant='secondary'
          >
            Copy to Clipboard
          </Button>
        </div>
        <Modal.Content>
          <div className={styles.codeOutput}>
            :root {'{'}
            {state.colorScales.map((value, key) => (
              <div key={key}>
                {value.colorScale.map((color, index) => (
                  <div key={index}>
                    <span className={styles.tokenName}>
                      --fds-brand-alt{value.altColorNumber}-{(index + 1) * 100}:
                    </span>{' '}
                    <span className={styles.tokenValue}>
                      {color.toUpperCase()};
                    </span>
                  </div>
                ))}
                <br />
              </div>
            ))}
            {mapButtonFirstTokens()}
            {'}'}
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
