import { Button, Modal, Paragraph } from '@digdir/design-system-react';
import { useRef } from 'react';
import { useDesignTokenContext } from '../../layouts/ComponentsDesignLayout/ComponentDesignContext';

const CodeGenerator = () => {
  const modalRef = useRef<HTMLDialogElement>(null);
  const { designTokens } = useDesignTokenContext();
  return (
    <div className='copyCode'>
      <Button onClick={() => modalRef.current?.showModal()}>Copy code</Button>
      <Modal
        ref={modalRef}
        onInteractOutside={() => modalRef.current?.close()}
      >
        <Modal.Header>Design-tokens</Modal.Header>
        <Modal.Content>
          <Paragraph>
            :root {'{'}
            {Object.entries(designTokens).map(([designToken, value]) => (
              <Paragraph
                key={designToken}
              >{`${designToken}: ${value};`}</Paragraph>
            ))}
            {'}'}
          </Paragraph>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
