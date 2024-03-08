import DesignMenuLayout from '../DesignMenuLayout/DesignMenuLayout';
import PreviewAreaLayout from '../PreviewAreaLayout/PreviewAreaLayout';
import { ToggleGroup } from '@digdir/design-system-react';
import styles from './FrontpageLayout.module.css';
import { useState } from 'react';

const FrontPageLayout = () => {
  const [activeLayout, setActiveLayout] = useState<string>('Layout1');

  const handleLayoutChange = (layout: string) => {
    setActiveLayout(layout);
  };

  return (
    <div className={styles.frontpageContainer}>
      <aside className={styles.designMenuContainer}>
        <DesignMenuLayout></DesignMenuLayout>
      </aside>
      <div className={styles.previewMenuContainer}>
        <div className={styles.toggleGroupContainer}>
          <ToggleGroup
            defaultValue='layout1'
            name='toggle-group'
            onChange={handleLayoutChange}
            size='small'
          >
            <ToggleGroup.Item value='layout1'>Layout 1</ToggleGroup.Item>
            <ToggleGroup.Item value='layout2'>Layout 2</ToggleGroup.Item>
            <ToggleGroup.Item value='layout3'>Layout 3</ToggleGroup.Item>
            <ToggleGroup.Item value='layout4'>Layout 4</ToggleGroup.Item>
          </ToggleGroup>
        </div>
        <PreviewAreaLayout activeLayout={activeLayout}></PreviewAreaLayout>
      </div>
    </div>
  );
};
export default FrontPageLayout;
