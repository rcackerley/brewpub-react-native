import React from 'react';
import {View} from 'react-native';
import CreateAccount from '../account/CreateAccount';

class CreateAccountScreen extends React.Component {

  static navigationOptions = {
    title: 'Create Account',
  };

  render() {
    return (
      <View><CreateAccount /></View>
    )
  }
}

export default CreateAccountScreen;
