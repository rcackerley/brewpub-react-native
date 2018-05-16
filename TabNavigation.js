import React from 'react';
import HomeStack from './components/screens/HomeStack';
import AccountStack from './components/screens/AccountStack';
import ShelfStack from './components/screens/ShelfStack';
import BOTWStack from './components/screens/BOTWStack';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from 'react-navigation';

const TabNavigation = createBottomTabNavigator({
    Home: HomeStack,
    Beers_of_the_Week: BOTWStack,
    MyShelf: ShelfStack,
    Account: AccountStack,
  },
  {
    navigationOptions: ({ navigation }) => ({
      
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        if (routeName === 'Home') {
          iconName = `ios-book${focused ? '' : '-outline'}`;
        } else if (routeName === 'MyShelf') {
          iconName = `ios-heart${focused ? '' : '-outline'}`;
        } else if (routeName === 'Account') {
          iconName = `ios-person${focused ? '' : '-outline'}`;
        } else if (routeName === 'Beers_of_the_Week') {
          iconName = `ios-beer${focused ? '' : '-outline'}`;
        }

        // You can return any component that you like here! We usually use an
        // icon component from react-native-vector-icons
        return <Ionicons name={iconName} size={25} color={tintColor} />;
      },
    }),
    tabBarOptions: {
      activeTintColor: '#e28830',
      inactiveTintColor: 'gray',
    },
  }
)
export default TabNavigation;
