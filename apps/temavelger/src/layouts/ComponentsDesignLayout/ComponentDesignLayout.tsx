import { useState } from 'react';
import ActionColorSelect from '../../components/ActionColorSelect/ActionColorSelect';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import {
  DesignTokenContext,
  initialDesignTokens,
} from './ComponentDesignContext';

const ComponentDesignLayout = () => {
  const [designTokens, setDesignTokens] = useState(initialDesignTokens);

  const setTokenValue = (token: string, value: string) => {
    setDesignTokens({ ...designTokens, [token]: value });
  };

  return (
    <DesignTokenContext.Provider
      value={{ designTokens: designTokens, setTokenValue }}
    >
      <aside className={styles.designMenuContainer}>
        <h1>Temavelger</h1>
        <ColorPicker token='--fds-semantic-surface-first-light'></ColorPicker>
        <ColorPicker token='--fds-semantic-surface-second-light'></ColorPicker>
        <ColorPicker token='--fds-semantic-surface-third-light'></ColorPicker>
        <ActionColorSelect></ActionColorSelect>
        <CodeGenerator></CodeGenerator>
      </aside>
    </DesignTokenContext.Provider>
  );
};
export default ComponentDesignLayout;
