import { NativeSelect, Tag, ToggleGroup } from '@digdir/design-system-react';
import CompositeComponent from '../../components/CompositeComponent/CompositeComponent';
import styles from './ComponentsPreviewLayout.module.css';
import CardComponent from '../../components/CardComponent/CardComponent';

const ComponentsPreviewLayout = () => {
  return (
    <section className={styles.componentsPreviewContainer}>
      <div className={styles.tagComponent}>
        <Tag
          color='neutral'
          size='medium'
        >
          Beta
        </Tag>
        <Tag
          color='neutral'
          size='medium'
        >
          NY
        </Tag>
        <Tag
          color='neutral'
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
      <div className='nativeSelectComponent'>
        <NativeSelect size='medium'>
          <option
            value='blank'
            color='first'
          >
            First color
          </option>
        </NativeSelect>
        <NativeSelect size='medium'>
          <option
            value='blank'
            color='second'
          >
            Second color
          </option>
        </NativeSelect>
        <NativeSelect size='medium'>
          <option
            value='blank'
            color='third'
          >
            Third color
          </option>
        </NativeSelect>
      </div>
    </section>
  );
};
export default ComponentsPreviewLayout;
