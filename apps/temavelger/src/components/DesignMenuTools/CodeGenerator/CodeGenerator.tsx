import { Alert, Button, Heading, Modal } from '@digdir/designsystemet-react';
import { FileCodeIcon, CodeIcon } from '@navikt/aksel-icons';
import { useRef, useState } from 'react';

import { useReducerContext } from '../../../contexts/useReducerContext';

import styles from './CodeGenerator.module.css';
import generateButtonFirstOutput from './helperFunctions/generateButtonFirstOutput';
import generateButtonSecondOutput from './helperFunctions/generateButtonSecondOutput';
import generateFormElementsOutput from './helperFunctions/generateFormElementsOutput';
import generateColorScaleOutput from './helperFunctions/generateColorScaleOutput';
import generateBorderRadiusOutput from './helperFunctions/generateBorderRadiusOutput';
import generateFontFamilyOutput from './helperFunctions/generateFontFamilyOutput';
import generateSurfaceColorOutput from './helperFunctions/generateSurfaceColorOutput';
import generateFontColorOutput from './helperFunctions/generateFontColorOutput';

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
    <div>
      <div className={styles.generateCodeButton}>
        <Button
          onClick={openModal}
          variant='primary'
          className='openModalBtn'
        >
          <CodeIcon
            title='a11y-title'
            fontSize='1.5rem'
          />
          Generer CSS
        </Button>
      </div>

      <Modal
        ref={modalRef}
        onInteractOutside={closeModal}
        className={styles.codeGeneratorModal}
      >
        <div className={styles.closeModalBtn}>
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
        </div>

        <Modal.Content>
          <div className={styles.codeOutputContainer}>
            <div>
              :root {'{'}
              {generateColorScaleOutput(state)}
              {generateSurfaceColorOutput(state)}
              {generateButtonFirstOutput(state)}
              {generateButtonSecondOutput(state)}
              {generateFormElementsOutput(state)}
              {generateBorderRadiusOutput(state)}
              {generateFontFamilyOutput(state)}
              {generateFontColorOutput(state)}
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
