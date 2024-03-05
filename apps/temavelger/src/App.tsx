import '@digdir/design-system-tokens/brand/digdir/tokens.css';

import FrontPageLayout from './layouts/FrontpageLayout/FrontpageLayout';
import { ReducerProvider } from './contexts/ReducerContext';

function App() {
  return (
    <ReducerProvider>
      <FrontPageLayout></FrontPageLayout>;
    </ReducerProvider>
  );
}

export default App;
