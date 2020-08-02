import React from 'react';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import { AppContainer } from './src/screens'
import { NavigationService } from './src/utils'

import { persistor, store } from './src/redux/store';
import Loading from 'src/components/Loading';

const App = () => (
  <Provider store={store}>
    <PersistGate loading={<Loading />} persistor={persistor}>
      <AppContainer ref={NavigationService.setTopLevelNavigator} />
    </PersistGate>
  </Provider>
);

export default App;
