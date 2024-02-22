import BorderRadiusInput from './BorderRadiusInput';
import styles from './BorderRadiusSelect.module.css';

const BorderRadiusSelect = () => {
  return (
    <div className={styles.borderRadiusSelectMenu}>
      <h3>Endre border-radius</h3>
      <BorderRadiusInput borderRadiusSize='small' />
      <BorderRadiusInput borderRadiusSize='medium' />
      <BorderRadiusInput borderRadiusSize='large' />
      <BorderRadiusInput borderRadiusSize='xlarge' />
    </div>
  );
};
export default BorderRadiusSelect;
