import React from 'react';
import {View, Text, TextInput, AsyncStorage} from 'react-native';
import {Button} from 'native-base';
import {signIn} from  '../../ajax/ajax';
import {connect} from 'react-redux';
import {setToken} from '../../actions/actions';
import { withNavigation } from 'react-navigation';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
        emailInput: null,
        passwordInput: null,
      }
  }

  render() {
    let {emailInput, passwordInput} = this.state;
    let {setToken} = this.props;
    let {navigate} = this.props.navigation;
    let handleUserName = (text) =>
      this.setState({emailInput: text})
    let handlePassword = (text) =>
      this.setState({passwordInput: text})

    return(
      <View style={{
        paddingLeft: 10,
        backgroundColor: 'white',
        height: '100%',
        alignItems: 'center'
      }}>
        <Text style={{
          fontFamily: 'quicksand-light',
          fontSize: 25,
          color: '#362c1e',
          marginBottom: 5,
          marginTop: 30
        }}>Login</Text>
        <TextInput style={{
          marginTop: 40,
          width: '75%',
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2'
        }} placeholder="Enter your email address"
          onChangeText={(text) => handleUserName(text)}/>
        <TextInput style={{
          marginTop: 40,
          width: '75%',
          paddingBottom: 10,
          borderBottomWidth: 1,
          borderBottomColor: '#f2f2f2'
        }} placeholder="Enter your password"
          onChangeText={(text) => handlePassword(text)}
          secureTextEntry={true} />
        <View style={{
          flexDirection: 'row'
        }}>
          <Button
            style={{
              width: 100,
              marginTop: 30,
              backgroundColor: "#e28830",
              marginRight: 10,
              justifyContent: 'center'
            }}
            onPress={(event) => {
              event.preventDefault();
              signIn({email: emailInput, password: passwordInput})
              .then(token => {AsyncStorage.setItem('token', token.token); return token})
              .then(token => setToken(token))
              .then(res => navigate('Home'))
              .catch(err => console.log(err))
              }
            }>
            <Text style={{
            color: 'white'
            }}>
              Login</Text>
          </Button>
          <Button
            bordered dark
            style={{
              width: 120,
              marginTop: 30,
              marginLeft: 10,
              justifyContent: 'center'
            }}>
            <Text style={{
            }}>
              Create Account</Text>
          </Button>
        </View>
      </View>
    )
  }
}

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token)) });
let LoginContainer = withNavigation(connect(mapStateToProps, mapDispatchToProps)(Login));
export default LoginContainer;
