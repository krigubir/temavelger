import { Pagination, Tag } from '@digdir/designsystemet-react';
import CompositeComponent from '../../../../components/CompositeComponent/CompositeComponent';
import CardComponentAlt1 from '../../../../components/CardComponentAlt1/CardComponentAlt1';
import CardComponentAlt2 from '../../../../components/CardComponentAlt2/CardComponentAlt2';
import CardComponentAlt3 from '../../../../components/CardComponentAlt3/CardComponentAlt3';
import AccordionComponent from '../../../../components/AccordionComponent/AccordionComponent';
import styles from './ComponentLayout1.module.css';

const ComponentLayout1 = () => {
  return (
    <div>
      <div className={styles.tagComponentContainer}>
        <div className={styles.tagComponent}>
          <Tag
            color='first'
            size='small'
          >
            Beta
          </Tag>
        </div>
        <div className={styles.tagComponent}>
          <Tag
            color='second'
            size='small'
          >
            NY
          </Tag>
        </div>
        <div className={styles.tagComponent}>
          <Tag
            color='third'
            size='small'
          >
            Tag
          </Tag>
        </div>
      </div>
      <CompositeComponent></CompositeComponent>
      <div className={styles.cardComponent}>
        <CardComponentAlt1 color='first'></CardComponentAlt1>
        <CardComponentAlt2 color='second'></CardComponentAlt2>
        <CardComponentAlt3 color='third'></CardComponentAlt3>
      </div>
      <div className={styles.accordionComponentContainer}>
        <AccordionComponent color='first'></AccordionComponent>
        <AccordionComponent color='second'></AccordionComponent>
        <AccordionComponent color='third'></AccordionComponent>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          currentPage={3}
          itemLabel={(page) => `Side ${page}`}
          nextLabel='Neste'
          onChange={function noRefCheck() {}}
          previousLabel='Forrige'
          size='small'
          totalPages={10}
        />
      </div>
    </div>
  );
};
export default ComponentLayout1;
