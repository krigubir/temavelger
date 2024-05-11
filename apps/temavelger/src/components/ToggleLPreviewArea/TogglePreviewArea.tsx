import { ToggleGroup } from '@digdir/designsystemet-react';
import { useState } from 'react';

import styles from './TogglePreviewArea.module.css';

interface ToggleLayoutProps {
  handleLayoutChange: (layout: string) => void;
}

const ToggleLayout: React.FC<ToggleLayoutProps> = ({ handleLayoutChange }) => {
  const [activeLayout, setActiveLayout] = useState<string>('nettside');

  const handleClick = (layout: string) => {
    handleLayoutChange(layout);
    setActiveLayout(layout);
  };
  return (
    <div className={styles.toggleGroupContainer}>
      <ToggleGroup
        defaultValue='nettside'
        name='toggle-group'
        onChange={handleClick}
        size='small'
      >
        <ToggleGroup.Item
          className={
            activeLayout === 'nettside' ? styles.primary : styles.tertiary
          }
          value='nettside'
        >
          Nettside
        </ToggleGroup.Item>
        <ToggleGroup.Item
          className={
            activeLayout === 'komponent' ? styles.primary : styles.tertiary
          }
          value='komponent'
        >
          Komponent
        </ToggleGroup.Item>
      </ToggleGroup>
    </div>
  );
};
export default ToggleLayout;
