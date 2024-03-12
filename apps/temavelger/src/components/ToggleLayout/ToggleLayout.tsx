import { ToggleGroup } from '@digdir/designsystemet-react';
import styles from './ToggleLayout.module.css';

interface ToggleLayoutProps {
  handleLayoutChange: (layout: string) => void;
}

const ToggleLayout: React.FC<ToggleLayoutProps> = ({ handleLayoutChange }) => {
  return (
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
  );
};
export default ToggleLayout;
