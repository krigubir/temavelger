import ActionColorSelect from '../../components/ActionColorSelect/ActionColorSelect';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';

const ComponentDesignLayout = () => {
  const designTokens = [
    '--fds-semantic-surface-first-light',
    '--fds-semantic-surface-second-light',
    '--fds-semantic-surface-third-light',
  ];
  return (
    <aside className={styles.designMenuContainer}>
      <h1>Temavelger</h1>
      {designTokens.map((designToken, index) => {
        return (
          <ColorPicker
            key={index}
            designToken={designToken}
          ></ColorPicker>
        );
      })}
      <ActionColorSelect></ActionColorSelect>
      <CodeGenerator variables={designTokens}></CodeGenerator>
    </aside>
  );
};
export default ComponentDesignLayout;
