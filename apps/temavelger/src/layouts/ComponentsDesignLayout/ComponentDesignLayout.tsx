import ActionColorSelect from '../../components/ActionColorSelect/ActionColorSelect';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';
import styles from './ComponentDesignLayout.module.css';

const ComponentDesignLayout = () => {
  return (
    <aside className={styles.designMenuContainer}>
      <h1>Temavelger</h1>
      <ColorPicker></ColorPicker>
      <ActionColorSelect></ActionColorSelect>
      <CodeGenerator></CodeGenerator>
    </aside>
  );
};
export default ComponentDesignLayout;
