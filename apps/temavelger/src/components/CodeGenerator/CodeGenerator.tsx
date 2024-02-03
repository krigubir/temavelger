import { Button, Modal } from '@digdir/design-system-react';
import { useRef } from 'react';
import { useColorScale } from '../../contexts/useColorScale';
import styles from './CodeGenerator.module.css';

const CodeGenerator = () => {
  const { colorScales } = useColorScale();
  const modalRef = useRef<HTMLDialogElement>(null);
  return (
    <div className='copyCode'>
      <Button onClick={() => modalRef.current?.showModal()}>Copy code</Button>
      <Modal
        ref={modalRef}
        onInteractOutside={() => modalRef.current?.close()}
      >
        <Modal.Header>Design-tokens</Modal.Header>
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
