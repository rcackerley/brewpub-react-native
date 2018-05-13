import {createStackNavigator} from 'react-navigation';
import AccountScreen from './AccountScreen';

const AccountStack = createStackNavigator(
  {
    My_Account: AccountScreen,
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
