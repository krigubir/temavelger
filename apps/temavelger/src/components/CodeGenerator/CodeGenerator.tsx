import { Alert, Button, Heading, Modal } from '@digdir/designsystemet-react';
import { FileCodeIcon } from '@navikt/aksel-icons';
import { useRef, useState } from 'react';

import { useReducerContext } from '../../contexts/useReducerContext';

import styles from './CodeGenerator.module.css';
import generateButtonFirstOutput from './helperFunctions/generateButtonFirstOutput';
import generateButtonSecondOutput from './helperFunctions/generateButtonSecondOutput';
import generateFormElementsOutput from './helperFunctions/generateFormElementsOutput';
import generateColorScaleOutput from './helperFunctions/generateColorScaleOutput';
import generateBorderRadiusOutput from './helperFunctions/generateBorderRadiusOutput';
import generateFontFamilyOutput from './helperFunctions/generateFontFamilyOutput';

const CodeGenerator = () => {
  const { state } = useReducerContext();
  const [successFullCopy, setSuccessFullCopy] = useState(false);
  const modalRef = useRef<HTMLDialogElement>(null);

  const openModal = () => {
    modalRef.current?.showModal();
    setSuccessFullCopy(false);
  };

  const closeModal = () => {
    modalRef.current?.close();
    setSuccessFullCopy(false);
  };

  const copyOutputToClipboard = () => {
    const code = document.querySelector(
      `.${styles.codeOutputContainer}`,
    )?.textContent;
    navigator.clipboard
      .writeText(code || '')
      .then(() => setSuccessFullCopy(true))
      .catch((error) =>
        console.error('Failed to write text to clipboard:', error),
      );
  };

  return (
    <div className={styles.generateCodeButton}>
      <Button onClick={openModal}>Generate output</Button>
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
            <div>
              :root {'{'}
              {generateColorScaleOutput(state)}
              {generateButtonFirstOutput(state)}
              {generateButtonSecondOutput(state)}
              {generateFormElementsOutput(state)}
              {generateBorderRadiusOutput(state)}
              {generateFontFamilyOutput(state)}
              {'}'}
            </div>
            <div className={styles.copyToClipboard}>
              <FileCodeIcon
                fontSize='2rem'
                className={styles.copyButtonIcon}
                onClick={() => copyOutputToClipboard()}
              />
            </div>
          </div>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
