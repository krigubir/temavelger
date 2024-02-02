import { Button, Modal, Paragraph } from '@digdir/design-system-react';
import { useRef } from 'react';
import { useColorScale } from '../../contexts/useColorScale';

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
          <Paragraph>
            :root {'{'}
            {Object.entries(colorScales).map(([key, value]) => (
              <Paragraph key={key}>
                {value.map((color, index) => (
                  <Paragraph key={index}>
                    --fds-brand-alt{key}-{(index + 1) * 100}: {color};
                  </Paragraph>
                ))}
              </Paragraph>
            ))}
            {'}'}
          </Paragraph>
        </Modal.Content>
      </Modal>
    </div>
  );
};
export default CodeGenerator;
