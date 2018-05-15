import React from 'react';
import {AsyncStorage} from 'react-native';
import TabNavigation from '../../TabNavigation';
import {connect} from 'react-redux';
import {setToken} from '../../actions/actions';

class GateComp extends React.Component {
  async componentDidMount(){
    let {setToken} = this.props;
    try {
      const value = await AsyncStorage.getItem('token');
      if (value !== null){
        setToken(value)
      }
    } catch (error) {
    }
  }

  render() {
    return (
      <TabNavigation />
    )
  }
}

let mapStateToProps = state => state;
let mapDispatchToProps = dispatch => ({setToken: (token) => dispatch(setToken(token)) });
let GateCompContainer = connect(mapStateToProps, mapDispatchToProps)(GateComp);

export default GateCompContainer
