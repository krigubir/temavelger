import { Alert, Button, Heading, Modal } from '@digdir/designsystemet-react';
import { useRef, useState } from 'react';
import styles from './CodeGenerator.module.css';
import { useReducerContext } from '../../contexts/useReducerContext';
import generateButtonFirstOutput from './helperFunctions/generateButtonFirstOutput';
import generateButtonSecondOutput from './helperFunctions/generateButtonSecondOutput';
import generateFormElementsOutput from './helperFunctions/generateFormElementsOutput';
import generateColorScaleOutput from './helperFunctions/generateColorScaleOutput';
import { FileCodeIcon } from '@navikt/aksel-icons';

const CodeGenerator = () => {
  const { state } = useReducerContext();
  const [successFullCopy, setSuccessFullCopy] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const closeModal = () => {
    modalRef.current?.close();
    setSuccessFullCopy(false);
  };

  const openModal = () => {
    modalRef.current?.showModal();
    setSuccessFullCopy(false);
  };

  const copyOutputToClipboard = () => {
    const code = document.querySelector(
      `.${styles.codeOutputContainer}`,
    )?.textContent;
    navigator.clipboard.writeText(code || '');
    setSuccessFullCopy(true);
  };

  return (
    <div className={styles.generateCodeButton}>
      <Button
        onClick={openModal}
        style={{ background: '#00315D' }}
      >
        Generate output
      </Button>
      <Modal
        ref={modalRef}
        onInteractOutside={closeModal}
      >
        {successFullCopy && (
          <Alert severity='success'>
            <Heading
              level={1}
              size='xsmall'
            >
              Koden er kopiert til utklippstavlen
            </Heading>
          </Alert>
        )}
        <Modal.Header>Design-tokens</Modal.Header>

        <Modal.Content>
          <div className={styles.codeOutputContainer}>
            <div className={styles.codeOutput}>
              :root {'{'}
              {generateColorScaleOutput(state)}
              {generateButtonFirstOutput(state)}
              {generateButtonSecondOutput(state)}
              {generateFormElementsOutput(state)}
              {'}'}
            </div>
            <div className={styles.copyToClipboard}>
              <FileCodeIcon
                title='a11y-title'
                fontSize='2rem'
                className={styles.copyButtonIcon}
                onClick={copyOutputToClipboard}
              />
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
