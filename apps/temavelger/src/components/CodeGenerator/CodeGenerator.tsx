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
        <Modal.Header>
          Modal med closeOnBackdropClick og en veldig lang tittel
        </Modal.Header>
        <Modal.Content>
          <Paragraph>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis
            doloremque obcaecati assumenda odio ducimus sunt et.
          </Paragraph>
        </Modal.Content>
        <Modal.Footer>Footer</Modal.Footer>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
