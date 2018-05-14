import React from 'react';
import TabNavigation from './TabNavigation';
import {Provider} from 'react-redux';
import store from './store/index';
import {StatusBar} from 'react-native';

StatusBar.setBarStyle('light-content', true);

export default App = () =>
  <Provider store={store}><TabNavigation /></Provider>
