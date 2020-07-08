import React from "react";
import { ThemeProvider } from 'styled-components';

import AppNavigation from './routes/Routes';
import theme from './styles';

const App = () => (
  <ThemeProvider
    theme={theme}
  >
    <AppNavigation />
  </ThemeProvider>
);

export default App;

