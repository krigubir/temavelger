import { Accordion, AccordionItem } from '@digdir/designsystemet-react';

import styles from './AccordionComponent.module.css';

interface AccordionComponentProps {
  color: 'first' | 'second' | 'third' | 'neutral' | 'subtle' | undefined;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ color }) => {
  return (
    <div className={styles.accordionComponent}>
      <Accordion
        border
        color={color}
      >
        <AccordionItem>
          <Accordion.Header level={3}>{`${color} color`} </Accordion.Header>
          <Accordion.Content>
            Velkommen til brukertest. Dine tilbakemeldinger er viktige for oss.
          </Accordion.Content>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default AccordionComponent;
