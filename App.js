import React from 'react';
import GateComp from './components/account/GateComp';
import {Provider} from 'react-redux';
import store from './store/index';
import {StatusBar, AsyncStorage, YellowBox} from 'react-native';
import { Font } from 'expo';
import './ReactotronConfig'
YellowBox.ignoreWarnings(['Warning: isMounted(...) is deprecated'])
StatusBar.setBarStyle('light-content', true);

class App extends React.Component {
  componentDidMount() {
    Font.loadAsync({
      'quicksand-bold': require('./assets/fonts/Quicksand-Bold.ttf'),
      'quicksand-light': require('./assets/fonts/Quicksand-Light.ttf'),
      'quicksand-medium': require('./assets/fonts/Quicksand-Medium.ttf'),
      'quicksand-regular': require('./assets/fonts/Quicksand-Regular.ttf'),
    });
  }

  render() {
    return (
      <Provider store={store}><GateComp /></Provider>
    )
  }
}

export default App
