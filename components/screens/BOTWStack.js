import React from 'react';
import BOTWScreen from './BOTWScreen';
import {createStackNavigator} from 'react-navigation';

const BOTWStack = createStackNavigator({
  Brews: BOTWScreen,
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#362c1e',
    },
    headerTintColor: '#fff',
  }
});

export default BOTWStack;
