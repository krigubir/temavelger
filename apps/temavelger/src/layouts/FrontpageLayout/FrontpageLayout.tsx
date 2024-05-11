import { useState } from 'react';

import DesignMenuLayout from '../../layouts/DesignMenuLayout/DesignMenuLayout';
import PreviewAreaLayout from '../../layouts/PreviewAreaLayout/PreviewAreaLayout';
import TogglePreviewArea from '../../components/ToggleLPreviewArea/TogglePreviewArea';

import styles from './FrontpageLayout.module.css';

const FrontpageLayout = () => {
  const [activeLayout, setActiveLayout] = useState<string>('nettside');

  const handleLayoutChange = (layout: string) => {
    setActiveLayout(layout);
  };
  return (
    <div className={styles.frontpage}>
      <aside className={styles.aside}>
        <DesignMenuLayout></DesignMenuLayout>
      </aside>
      <div className={styles.main}>
        <TogglePreviewArea
          handleLayoutChange={handleLayoutChange}
        ></TogglePreviewArea>
        <PreviewAreaLayout activeLayout={activeLayout}></PreviewAreaLayout>
      </div>
    </div>
  );
};
export default FrontpageLayout;
