import './App.css';
import '@digdir/design-system-tokens/brand/digdir/tokens.css';

import ComponentsPreviewLayout from './layouts/ComponentsPreviewLayout/ComponentsPreviewLayout';
import ComponentsDesignLayout from './layouts/ComponentsDesignLayout/ComponentsDesignLayout';

function App() {
  return (
    <>
      <ComponentsDesignLayout></ComponentsDesignLayout>
      <ComponentsPreviewLayout></ComponentsPreviewLayout>
    </>
  );
}

export default App;
