import Komponent from '../../components/PreviewAreaPages/Komponent/Komponent';
import Nettside from '../../components/PreviewAreaPages/Nettside/Nettside';

import styles from './PreviewAreaLayout.module.css';

interface PreviewAreaLayoutProps {
  activeLayout: string;
}

const PreviewAreaLayout: React.FC<PreviewAreaLayoutProps> = ({
  activeLayout,
}) => {
  let componentPreviewLayout: React.ReactNode = <Nettside></Nettside>;

  switch (activeLayout) {
    case 'nettside':
      componentPreviewLayout = <Nettside></Nettside>;
      break;
    case 'komponent':
      componentPreviewLayout = <Komponent></Komponent>;
      break;
  }

  return (
    <section className={styles.componentsPreviewContainer}>
      {componentPreviewLayout}
    </section>
  );
};
export default PreviewAreaLayout;
