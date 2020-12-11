import React, { Suspense } from 'react';
import { PersistGate } from 'redux-persist/integration/react';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';

import { Spin } from 'antd';

import './config/yupConfig';
import './config/i18n';
import './config/reactotronConfig';
import 'antd/dist/antd.css';
import '~/styles/override.scss';
import theme from '~/styles/theme';

import GlobalStyles from './styles/global';
import Routes from './routes';
import history from './services/history';
import { store, persistor } from './store';

function App() {
  return (
    <Suspense fallback={<Spin className="page-loader" />}>
      <ThemeProvider theme={theme}>
        <Provider store={store}>
          <PersistGate persistor={persistor}>
            <Router history={history}>
              <GlobalStyles />
              <Routes />
            </Router>
          </PersistGate>
        </Provider>
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
