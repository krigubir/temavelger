import ComponentPreviewLayout1 from '../../components/ComponentPreviewLayout1/ComponentPreviewLayout1';
import ComponentsPreviewLayout2 from '../../components/ComponentPreviewLayout2/ComponentsPreviewLayout2';
import ComponentsPreviewLayout3 from '../../components/ComponentPreviewLayout3/ComponentsPreviewLayout3';
import ComponentsPreviewLayout4 from '../../components/ComponentPreviewLayout4/ComponentsPreviewLayout4';
import styles from './ComponentsPreviewLayout.module.css';

interface ComponentsPreviewLayoutProps {
  activeLayout: string;
}

const ComponentsPreviewLayout: React.FC<ComponentsPreviewLayoutProps> = ({
  activeLayout,
}) => {
  let componentPreviewLayout: React.ReactNode = (
    <ComponentPreviewLayout1></ComponentPreviewLayout1>
  );

  switch (activeLayout) {
    case 'layout1':
      componentPreviewLayout = (
        <ComponentPreviewLayout1></ComponentPreviewLayout1>
      );
      break;
    case 'layout2':
      componentPreviewLayout = (
        <ComponentsPreviewLayout2></ComponentsPreviewLayout2>
      );
      break;
    case 'layout3':
      componentPreviewLayout = (
        <ComponentsPreviewLayout3></ComponentsPreviewLayout3>
      );
      break;
    case 'layout4':
      componentPreviewLayout = (
        <ComponentsPreviewLayout4></ComponentsPreviewLayout4>
      );
      break;
  }

  return (
    <section className={styles.componentsPreviewContainer}>
      {componentPreviewLayout}
    </section>
  );
};
export default ComponentsPreviewLayout;
