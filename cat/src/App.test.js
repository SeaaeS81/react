import React from 'react';
import AllData from './AllData';
import { CssBaseline } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const App = () => (
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <AllData prop1="value1" prop2="value2">
      555
    </AllData>
  </ThemeProvider>
);

export default App;
