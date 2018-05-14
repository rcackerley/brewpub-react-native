import React from 'react';
import TabNavigation from './TabNavigation';
import {Provider} from 'react-redux';
import store from './store/index';
import {StatusBar} from 'react-native';
import { YellowBox } from 'react-native'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
StatusBar.setBarStyle('light-content', true);

export default App = () =>
  <Provider store={store}><TabNavigation /></Provider>
