import ActionColorSelect from '../../components/ActionColorSelect/ActionColorSelect';
import CodeGenerator from '../../components/CodeGenerator/CodeGenerator';
import ColorPicker from '../../components/ColorPicker/ColorPicker';

const ComponentsDesignLayout = () => {
  return (
    <nav className='designMenu'>
      <h1>Temavelger</h1>
      <ColorPicker></ColorPicker>
      <ActionColorSelect></ActionColorSelect>
      <CodeGenerator></CodeGenerator>
    </nav>
  );
};
export default ComponentsDesignLayout;
