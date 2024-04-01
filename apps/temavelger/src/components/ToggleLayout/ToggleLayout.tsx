import { ToggleGroup } from '@digdir/designsystemet-react';
import { useState } from 'react';

import styles from './ToggleLayout.module.css';

interface ToggleLayoutProps {
  handleLayoutChange: (layout: string) => void;
}

const ToggleLayout: React.FC<ToggleLayoutProps> = ({ handleLayoutChange }) => {
  const [activeLayout, setActiveLayout] = useState<string>('layout1');

  const handleClick = (layout: string) => {
    handleLayoutChange(layout);
    setActiveLayout(layout);
  };
  return (
    <div className={styles.toggleGroupContainer}>
      <ToggleGroup
        defaultValue='layout1'
        name='toggle-group'
        onChange={handleClick}
        size='small'
      >
        <ToggleGroup.Item
          className={
            activeLayout === 'layout1' ? styles.primary : styles.tertiary
          }
          value='layout1'
        >
          Nettside
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={
            activeLayout === 'layout2' ? styles.primary : styles.tertiary
          }
          value='layout2'
        >
          Komponent
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  );
};
export default ToggleLayout;
