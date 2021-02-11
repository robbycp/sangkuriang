import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import { store } from 'redux/configureStore';
import Routes from 'routes/index'
import theme from './theme';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Routes />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
