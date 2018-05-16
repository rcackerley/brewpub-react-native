import React from 'react';
import LoginForm from './LoginForm';

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
    let handleUserName = (event) =>
      this.setState({emailInput: event.target.value})
    let handlePassword = (event) =>
      this.setState({passwordInput: event.target.value})

    return (
      <div className="form">
        <LoginForm handleUserName={handleUserName} handlePassword={handlePassword}
        emailInput={emailInput} passwordInput={passwordInput} />
      </div>
    )
  }
}

export default Login;
