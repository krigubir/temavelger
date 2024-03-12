import '@digdir/design-system-tokens/brand/digdir/tokens.css';

import FrontpageLayout from './layouts/FrontpageLayout/FrontpageLayout';
import { ReducerProvider } from './contexts/ReducerContext';

function App() {
  return (
    <ReducerProvider>
      <FrontpageLayout></FrontpageLayout>;
    </ReducerProvider>
  );
}

export default App;
