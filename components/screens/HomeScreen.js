import React from 'react';
import {View, Text} from 'react-native';
import Logo from '../navigation/Logo';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: <Logo />,
  };

  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
