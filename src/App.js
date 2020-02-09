import React from 'react';
import { ThemeProvider } from 'styled-components';
import { ToastContainer } from 'react-toastify';
import theme from './styles/Theme';
import 'react-toastify/dist/ReactToastify.css';

import Routes from './routes';

import GlobalStyle from './styles/global';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ToastContainer />
      <Routes />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
