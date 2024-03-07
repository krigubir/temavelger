import { Button, Modal } from '@digdir/design-system-react';
import { useRef } from 'react';
import styles from './CodeGenerator.module.css';
import { useReducerContext } from '../../contexts/useReducerContext';
import generateButtonFirstOutput from './helperFunctions/generateButtonFirstOutput';
import generateButtonSecondOutput from './helperFunctions/generateButtonSecondOutput';
import generateFormElementsOutput from './helperFunctions/generateFormElementsOutput';
import generateColorScaleOutput from './helperFunctions/generateColorScaleOutput';

const CodeGenerator = () => {
  const { state } = useReducerContext();
  const modalRef = useRef<HTMLDialogElement>(null);

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
            {generateColorScaleOutput(state)}
            {generateButtonFirstOutput(state)}
            {generateButtonSecondOutput(state)}
            {generateFormElementsOutput(state)}
            {'}'}
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
