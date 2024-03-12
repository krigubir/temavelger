import DesignMenu from '../../components/DesignMenu/DesignMenu';
import styles from './DesignMenuLayout.module.css';

const DesignMenuLayout = () => {
  return (
    <div className={styles.designMenuContainer}>
      <DesignMenu></DesignMenu>
    </div>
  );
};
export default DesignMenuLayout;
