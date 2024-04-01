import { useState } from 'react';

import DesignMenuLayout from '../../layouts/DesignMenuLayout/DesignMenuLayout';
import PreviewAreaLayout from '../../layouts/PreviewAreaLayout/PreviewAreaLayout';
import ToggleLayout from '../ToggleLayout/ToggleLayout';

import styles from './PageContainer.module.css';

const PageContainer = () => {
  const [activeLayout, setActiveLayout] = useState<string>('Layout1');

  const handleLayoutChange = (layout: string) => {
    setActiveLayout(layout);
  };
  return (
    <>
      <aside className={styles.aside}>
        <DesignMenuLayout></DesignMenuLayout>
      </aside>
      <div className={styles.main}>
        <ToggleLayout handleLayoutChange={handleLayoutChange}></ToggleLayout>
        <PreviewAreaLayout activeLayout={activeLayout}></PreviewAreaLayout>
      </div>
    </>
  );
};
export default PageContainer;
