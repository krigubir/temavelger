import { Button, Modal } from '@digdir/design-system-react';
import { useRef } from 'react';
import { useColorScale } from '../../contexts/useColorScale';
import styles from './CodeGenerator.module.css';

const CodeGenerator = () => {
  const { colorScales } = useColorScale();
  const modalRef = useRef<HTMLDialogElement>(null);

  const generateTokenOutput = () => {
    let tokenOutput = ':root {\n';
    Object.entries(colorScales).forEach(([key, value]) => {
      value.forEach((color, index) => {
        tokenOutput += `  --fds-brand-alt${key}-${
          (index + 1) * 100
        }: ${color};\n`;
      });
      tokenOutput += '\n';
    });
    tokenOutput += '}';
    return tokenOutput;
  };

  const copyToClipboard = () => {
    const codeGeneratorOutput = generateTokenOutput();
    navigator.clipboard.writeText(codeGeneratorOutput).then(() => {
      alert('CSS copied to clipboard!');
    });
  };
  return (
    <div className='copyCode'>
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
            onClick={copyToClipboard}
          >
            Copy to Clipboard
          </Button>
        </div>
        <Modal.Content>
          <div className={styles.codeOutput}>
            :root {'{'}
            {Object.entries(colorScales).map(([key, value]) => (
              <div key={key}>
                {value.map((color, index) => (
                  <div key={index}>
                    <span className={styles.tokenName}>
                      --fds-brand-alt{key}-{(index + 1) * 100}:
                    </span>{' '}
                    <span className={styles.tokenValue}>
                      {color.toUpperCase()};
                    </span>
                  </div>
                ))}
                <br />
              </div>
            ))}
            {'}'}
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
