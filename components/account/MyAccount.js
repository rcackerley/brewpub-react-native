import React from 'react';
import {View, Text, Image, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';
import {withNavigation} from 'react-navigation';
import {getUserProfile, uploadImage} from '../../ajax/ajax';
import {setUser, clearToken} from '../../actions/actions';
import {APIHost} from '../../environment/config';
import {Thumbnail, Button} from 'native-base';

class MyAccount extends React.Component {

  componentDidMount() {
    let {token, setUser, user, navigation} = this.props;
    getUserProfile(token)
    .then(user => {user.image === null ? user.image = "images/placeholder.png" : console.log('image found'); return user;})
    .then(user => setUser(user))
    .catch(err => navigation.navigate('Home'))
  }

  render() {
    let {user, clearToken} = this.props;
    return (
      <View style={{
        height: '100%',
        alignItems: 'center',
      }}>
        <Thumbnail style={{
          height: 60,
          width: 60,
          marginTop: 30,
          borderColor: '#362c1e',
          borderWidth: .5

        }}
        circle
        source={{uri: APIHost + '/' + user.image}} />
        <Text style={{
          fontFamily: 'quicksand-light',
          fontSize: 17,
          color: '#362c1e',
          marginBottom: 5,
          marginTop: 30,
        }}>{user.name}</Text>
        <Text style={{
          fontFamily: 'quicksand-light',
          fontSize: 12,
          color: '#362c1e',
          marginBottom: 5,
          marginTop: 15,
        }}>email: {user.name}</Text>
        <Text style={{
          fontFamily: 'quicksand-light',
          fontSize: 12,
          color: '#362c1e',
          marginBottom: 5,
          marginTop: 5,
        }}>password: *******</Text>
        <View>
          <Button
            onPress={event => AsyncStorage.removeItem('token')
            .then(res => clearToken())}
            small
            bordered dark
            style={{
              width: 100,
              marginTop: 30,
              marginLeft: 10,
              justifyContent: 'center',
              alignItems: 'center'
            }}>
            <Text>Logout</Text>
          </Button>
        </View>
      </View>
    )
  }
}

let mapDispatchToProps = dispatch => ({
  setUser: (user) => dispatch(setUser(user)),
  clearToken: () => dispatch(clearToken())});
let mapStateToProps = state => ({user: state.user, token: state.token})
let MyAccountContainer = withNavigation(connect(mapStateToProps, mapDispatchToProps)(MyAccount));
export default MyAccountContainer;
