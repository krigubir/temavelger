import ComponentsDesignLayout from '../ComponentsDesignLayout/ComponentDesignLayout';
import ComponentsPreviewLayout from '../ComponentsPreviewLayout/ComponentsPreviewLayout';
import styles from './FrontpageLayout.module.css';
const FrontPageLayout = () => {
  return (
    <div className={styles.frontpageContainer}>
      <ComponentsDesignLayout></ComponentsDesignLayout>
      <ComponentsPreviewLayout></ComponentsPreviewLayout>
    </div>
  );
};
export default FrontPageLayout;
