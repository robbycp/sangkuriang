import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux';
import { ThemeProvider } from '@material-ui/core/styles';

import Layout from 'components/Layout'
import Routes from 'routes/index'
import { store, history } from 'redux/configureStore';
import { authCheck } from 'redux/reducer/authSlice';
import theme from './theme';
import './App.css';

function App() {
  React.useEffect(() => {
    store.dispatch(authCheck())
  }, [])
  return (
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Layout>
            <Routes />
          </Layout>
        </ThemeProvider>
      </ConnectedRouter>
    </Provider>
  );
}

export default App;
