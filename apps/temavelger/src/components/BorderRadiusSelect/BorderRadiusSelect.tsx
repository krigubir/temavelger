import BorderRadiusInput from './BorderRadiusInput';
import styles from './BorderRadiusSelect.module.css';

const BorderRadiusSelect = () => {
  return (
    <div className={styles.borderRadiusSelectMenu}>
      <BorderRadiusInput borderRadiusSize='small' />
      <BorderRadiusInput borderRadiusSize='medium' />
      <BorderRadiusInput borderRadiusSize='large' />
      <BorderRadiusInput borderRadiusSize='xlarge' />
    </div>
  );
};
export default BorderRadiusSelect;
