import React from 'react';
import HomeStack from './components/screens/HomeStack';
import AccountStack from './components/screens/AccountStack';
import ShelfStack from './components/screens/ShelfStack';
import BOTWStack from './components/screens/BOTWStack';
import { createBottomTabNavigator } from 'react-navigation';

const TabNavigation = createBottomTabNavigator({
    Home: HomeStack,
    Beers_of_the_Week: BOTWStack,
    MyShelf: ShelfStack,
    Account: AccountStack,
  });

export default TabNavigation;
