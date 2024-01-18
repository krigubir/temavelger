import {
  Card,
  Heading,
  NativeSelect,
  Tag,
  ToggleGroup,
} from '@digdir/design-system-react';
import CompositeComponent from '../../components/CompositeComponent/CompositeComponent';
import styles from './ComponentsPreviewLayout.module.css';

const ComponentsPreviewLayout = () => {
  return (
    <section className={styles.componentsPreviewContainer}>
      <div className={styles.tagComponent}>
        <Tag
          color='info'
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
          color='success'
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
        <Card
          color='first'
          style={{
            width: '320px',
          }}
        >
          <Card.Media>
            <img
              src='https://storybook.designsystemet.no/static/media/Cat%201.3c16ca2e.jpg'
              alt='kattepus'
            />
          </Card.Media>
          <Card.Header>
            <Heading size='small'>Card Title</Heading>
          </Card.Header>
          <Card.Content>
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
            supposedly about this
          </Card.Content>
        </Card>
        <Card
          color='second'
          style={{
            width: '320px',
          }}
        >
          <Card.Media>
            <img
              src='https://storybook.designsystemet.no/static/media/Cat%201.3c16ca2e.jpg'
              alt='kattepus'
            />
          </Card.Media>
          <Card.Header>
            <Heading size='small'>Second Color</Heading>
          </Card.Header>
          <Card.Content>
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
            supposedly about this
          </Card.Content>
        </Card>
        <Card
          color='third'
          style={{
            width: '320px',
          }}
        >
          <Card.Media>
            <img
              src='https://storybook.designsystemet.no/static/media/Cat%201.3c16ca2e.jpg'
              alt='kattepus'
            />
          </Card.Media>
          <Card.Header>
            <Heading size='small'>Third Color</Heading>
          </Card.Header>
          <Card.Content>
            Most provide as with carried business are much better more the
            perfected designer. Writing slightly explain desk unable at
            supposedly about this
          </Card.Content>
        </Card>
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
