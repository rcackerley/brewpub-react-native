import {createStackNavigator} from 'react-navigation';
import AccountScreen from './AccountScreen';
import CreateAccountScreen from './CreateAccountScreen';

const AccountStack = createStackNavigator(
  {
    My_Account: AccountScreen,
    Create_Account: CreateAccountScreen,
  },
  {
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#362c1e',
      },
      headerTintColor: '#fff',
    }
  }
);

export default AccountStack;
