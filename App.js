import React from 'react';
import TabNavigation from './TabNavigation';
import {Provider} from 'react-redux';
import store from './store/index';

export default App = () =>
  <Provider store={store}><TabNavigation /></Provider>
