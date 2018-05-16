import React from 'react';
import {View, Text, TextInput, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import {createAccount} from  '../../ajax/ajax';
import {connect} from 'react-redux';
import {setToken} from '../../actions/actions';
import { withNavigation } from 'react-navigation';
import Ionicons from 'react-native-vector-icons/Ionicons';

class CreateAccount extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailInput: null,
        passwordInput: null,
        usernameInput: null,
      }
  }

  render() {
    let {emailInput, passwordInput, usernameInput} = this.state;
    let {setToken} = this.props;
    let {navigate} = this.props.navigation;
    let handleEmail = (text) =>
      this.setState({emailInput: text})
    let handlePassword = (text) =>
      this.setState({passwordInput: text})
    let handleUsername = (text) =>
      this.setState({usernameInput: text})

    return(
      <View style={{
        paddingLeft: 10,
        height: '100%',
        alignItems: 'center'
      }}>
        <Text style={{
          fontFamily: 'quicksand-light',
          fontSize: 25,
          color: '#362c1e',
          marginBottom: 5,
          marginTop: 30
        }}>Create Account</Text>
        <View style={{
          flexDirection: 'row',
          marginTop: 40,
        }}>
          <Ionicons name={'ios-person'} size={25} color={'#e28830'} />
          <TextInput style={{
            width: '75%',
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#a9a9a9',
            marginLeft: 15
          }} placeholder="Enter your username"
            onChangeText={(text) => handleUsername(text)}/>
          </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 40,
        }}>
          <Ionicons name={'ios-mail'} size={25} color={'#e28830'} />
          <TextInput style={{
            width: '75%',
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#a9a9a9',
            marginLeft: 15
          }} placeholder="Enter your email address"
            onChangeText={(text) => handleEmail(text)}/>
          </View>
        <View style={{
          flexDirection: 'row',
          marginTop: 40,
        }}>
          <Ionicons name={'ios-key'} size={25} color={'#e28830'} />
          <TextInput style={{
            width: '75%',
            paddingBottom: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#a9a9a9',
            marginLeft: 15
          }} placeholder="Enter your password"
            onChangeText={(text) => handlePassword(text)}
            secureTextEntry={true} />
        </View>
        <View style={{
          flexDirection: 'row'
        }}>
          <Button
            style={{
              width: 120,
              marginTop: 30,
              backgroundColor: "#a9a9a9",
              marginRight: 10,
              justifyContent: 'center'
            }}
            onPress={(event) => {
              event.preventDefault();
              createAccount({name: usernameInput, email: emailInput, password: passwordInput})
              .then(token => {AsyncStorage.setItem('token', token.token); return token})
              .then(token => setToken(token))
              .then(res => navigate('Home'))
              .catch(err => console.log(err))
              }
            }>
            <Text style={{
            color: 'white'
            }}>
              Create Account</Text>
          </Button>
          <Button
            onPress={event => this.props.navigation.goBack()}
            bordered dark
            style={{
              width: 100,
              marginTop: 30,
              marginLeft: 10,
              justifyContent: 'center'
            }}>
            <Text style={{
            }}>
              Login</Text>
          </Button>
        </View>
      </View>
    )
  }
}

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token)) });
let CreateAccountContainer = withNavigation(connect(mapStateToProps, mapDispatchToProps)(CreateAccount));
export default CreateAccountContainer;
