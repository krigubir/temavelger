import { useState } from 'react';
import ActionColorSelect from '../../components/ActionColorSelect/ActionColorSelect';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';
import {
  DesignTokenContext,
  initialDesignTokens,
} from './ComponentDesignContext';
import { Button } from '@digdir/design-system-react';

const ComponentDesignLayout = () => {
  const [designTokens, setDesignTokens] = useState(initialDesignTokens);
  const [tokenList, setTokenList] = useState([
    '--fds-semantic-surface-first-light',
    '--fds-semantic-surface-second-light',
    '--fds-semantic-surface-third-light',
  ]);

  const setTokenValue = (token: string, value: string) => {
    setDesignTokens({ ...designTokens, [token]: value });
  };

  const addColorPicker = (newDesignToken: string) => {
    setTokenList([...tokenList, newDesignToken]);
  };

  return (
    <DesignTokenContext.Provider
      value={{ designTokens: designTokens, setTokenValue }}
    >
      <aside className={styles.designMenuContainer}>
        <h1>Temavelger</h1>
        {tokenList.map((token, index) => (
          <ColorPicker
            key={index}
            token={token}
          ></ColorPicker>
        ))}
        <Button
          onClick={() => addColorPicker('--fds-semantic-surface-fourth-light')}
        >
          Legg til farge
        </Button>
        <ActionColorSelect></ActionColorSelect>
        <CodeGenerator></CodeGenerator>
      </aside>
    </DesignTokenContext.Provider>
  );
};
export default ComponentDesignLayout;
