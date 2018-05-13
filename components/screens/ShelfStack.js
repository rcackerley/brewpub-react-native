import {createStackNavigator} from 'react-navigation';
import MyShelfScreen from './MyShelfScreen';
import PairingScreen from './PairingScreen';

const ShelfStack = createStackNavigator({
  MyShelf: MyShelfScreen,
  Pairing: PairingScreen,
},
{
  navigationOptions: {
    headerStyle: {
      backgroundColor: '#362c1e',
    },
    headerTintColor: '#fff',
  }
});

export default ShelfStack;
