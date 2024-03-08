import ComponentLayout1 from './ComponentLayouts/ComponentLayout1/ComponentLayout1';
import ComponentLayout2 from './ComponentLayouts/ComponentLayout2/ComponentLayout2';
import ComponentLayout3 from './ComponentLayouts/ComponentLayout3/ComponentLayout3';
import ComponentLayout4 from './ComponentLayouts/ComponentLayout4/ComponentLayout4';
import styles from './PreviewAreaLayout.module.css';

interface PreviewAreaLayoutProps {
  activeLayout: string;
}

const PreviewAreaLayout: React.FC<PreviewAreaLayoutProps> = ({
  activeLayout,
}) => {
  let componentPreviewLayout: React.ReactNode = (
    <ComponentLayout1></ComponentLayout1>
  );

  switch (activeLayout) {
    case 'layout1':
      componentPreviewLayout = <ComponentLayout1></ComponentLayout1>;
      break;
    case 'layout2':
      componentPreviewLayout = <ComponentLayout2></ComponentLayout2>;
      break;
    case 'layout3':
      componentPreviewLayout = <ComponentLayout3></ComponentLayout3>;
      break;
    case 'layout4':
      componentPreviewLayout = <ComponentLayout4></ComponentLayout4>;
      break;
  }

  return (
    <section className={styles.componentsPreviewContainer}>
      {componentPreviewLayout}
    </section>
  );
};
export default PreviewAreaLayout;
