import { Pagination, Tag, ToggleGroup } from '@digdir/design-system-react';
import CompositeComponent from '../../components/CompositeComponent/CompositeComponent';
import styles from './ComponentsPreviewLayout.module.css';
import AccordionComponent from '../../components/AccordionComponent/AccordionComponent';
import CardComponentAlt1 from '../../components/CardComponentAlt1/CardComponentAlt1';
import CardComponentAlt2 from '../../components/CardComponentAlt2/CardComponentAlt2';
import CardComponentAlt3 from '../../components/CardComponentAlt3/CardComponentAlt3';

const ComponentsPreviewLayout = () => {
  return (
    <section className={styles.componentsPreviewContainer}>
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
      <div className={styles.toggleGroupComponent}>
        <ToggleGroup
          defaultValue='Alle arrangementer'
          name='toggle-group-arrangementer'
          onChange={function noRefCheck() {}}
          size='small'
        >
          <ToggleGroup.Item>Alle arrangementer</ToggleGroup.Item>
          <ToggleGroup.Item>I nærheten</ToggleGroup.Item>
          <ToggleGroup.Item>Digitale arrangementer</ToggleGroup.Item>
          <ToggleGroup.Item>Mest populære</ToggleGroup.Item>
        </ToggleGroup>
      </div>
      <div className={styles.cardComponent}>
        <CardComponentAlt1 cardVariant='first'></CardComponentAlt1>
        <CardComponentAlt2 cardVariant='second'></CardComponentAlt2>
        <CardComponentAlt3 cardVariant='third'></CardComponentAlt3>
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
    </section>
  );
};
export default ComponentsPreviewLayout;
