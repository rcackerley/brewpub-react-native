import React from 'react';
import {View} from 'react-native';
import Login from '../account/Login';
import {connect} from 'react-redux';
import MyAccount from '../account/MyAccount';

class AccountScreen extends React.Component {

  static navigationOptions = {
    title: 'My Account',
  };

  render() {
    let {token} = this.props;
    return (
      <View>{token ? <MyAccount /> : <Login />}</View>
    )
  }
}

let mapStateToProps = state => ({token: state.token})
export default connect(mapStateToProps)(AccountScreen);
