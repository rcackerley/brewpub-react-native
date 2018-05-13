import {createStackNavigator} from 'react-navigation';
import HomeScreen from './HomeScreen';
import PairingScreen from './PairingScreen';

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    Pairing: PairingScreen,
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

export default HomeStack;
