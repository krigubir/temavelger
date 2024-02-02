import { Button, Modal, Paragraph } from '@digdir/design-system-react';
import { useRef } from 'react';

const CodeGenerator = () => {
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
          <Paragraph>
            :root {'{'}
            <Paragraph>--fds-brand-alt1-100: #ffffff;</Paragraph>
            {'}'}
          </Paragraph>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
