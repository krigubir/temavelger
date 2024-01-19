import { Button, Modal, Paragraph } from '@digdir/design-system-react';
import { useRef } from 'react';

interface CodeGeneratorProps {
  variables: string[];
}

const CodeGenerator: React.FC<CodeGeneratorProps> = ({ variables }) => {
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
            {variables.map((variable, index) => {
              return <Paragraph key={index}>{variable}</Paragraph>;
            })}
            {'}'}
          </Paragraph>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
