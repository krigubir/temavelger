import { Accordion, AccordionItem } from '@digdir/design-system-react';
import styles from './AccordionComponent.module.css';

interface AccordionComponentProps {
  color: 'first' | 'second' | 'third' | 'neutral' | 'subtle' | undefined;
}

const AccordionComponent: React.FC<AccordionComponentProps> = ({ color }) => {
  return (
    <div className={styles.accordionComponent}>
      <Accordion
        color={color}
        style={{ borderRadius: 'var(--fds-border_radius-medium)' }}
      >
        <AccordionItem>
          <Accordion.Header level={3}>{`${color} color`}</Accordion.Header>
        </AccordionItem>
      </Accordion>
    </div>
  );
};
export default AccordionComponent;
