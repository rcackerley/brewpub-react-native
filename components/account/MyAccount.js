import React from 'react';
import {View} from 'react-native';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {getUserProfile, uploadImage} from '../../ajax/ajax';
import {setUser} from '../../actions/actions';

class MyAccount extends React.Component {

  componentDidMount() {
    let {token, setUser, user, navigation} = this.props;
    getUserProfile(token)
    .then(user => {user.image === null ? user.image = "images/placeholder.png" : console.log('image found'); return user;})
    .then(user => setUser(user))
    .catch(err => navigation.navigate('Home'))
  }

  render() {
    return (
      <View></View>
    )
  }
}

let mapDispatchToProps = dispatch => ({setUser: (user) => dispatch(setUser(user)) });
let mapStateToProps = state => ({user: state.user, token: state.token})
let MyAccountContainer = withNavigation(connect(mapStateToProps, mapDispatchToProps)(MyAccount));
export default MyAccountContainer;
