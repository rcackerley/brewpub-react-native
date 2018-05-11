import React from 'react';
import HomeScreen from './components/screens/HomeScreen';
import AccountScreen from './components/screens/AccountScreen';
import MyShelfScreen from './components/screens/MyShelfScreen';
import { createBottomTabNavigator } from 'react-navigation';

export default createBottomTabNavigator({
  Home: HomeScreen,
  Account: AccountScreen,
  MyShelf: MyShelfScreen,
});
