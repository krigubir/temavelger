import { Tag, ToggleGroup } from '@digdir/design-system-react';
import CompositeComponent from '../../components/CompositeComponent/CompositeComponent';
import styles from './ComponentsPreviewLayout.module.css';
import CardComponent from '../../components/CardComponent/CardComponent';
import NativeSelectComponent from '../../components/NativeSelectComponent/NativeSelectComponent';

const ComponentsPreviewLayout = () => {
  return (
    <section className={styles.componentsPreviewContainer}>
      <div className={styles.tagComponent}>
        <Tag
          color='first'
          size='medium'
        >
          Beta
        </Tag>
        <Tag
          color='second'
          size='medium'
        >
          NY
        </Tag>
        <Tag
          color='third'
          size='medium'
        >
          Tag
        </Tag>
      </div>
      <CompositeComponent></CompositeComponent>
      <div className='toggleGroupComponent'>
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
        <CardComponent cardVariant='first'></CardComponent>
        <CardComponent cardVariant='second'></CardComponent>
        <CardComponent cardVariant='third'></CardComponent>
      </div>
      <div className={styles.nativeSelectComponent}>
        <NativeSelectComponent variant='First'></NativeSelectComponent>
        <NativeSelectComponent variant='Second'></NativeSelectComponent>
        <NativeSelectComponent variant='Third'></NativeSelectComponent>
      </div>
    </section>
  );
};
export default ComponentsPreviewLayout;
