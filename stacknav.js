import React from 'react';
import { createStackNavigator } from 'react-navigation'

import HomeScreen from './homescreen';
import SearchScreen2 from './searchscreen2';

const HomeStack = createStackNavigator({

  HomeScreen: {screen:HomeScreen},
  SearchScreen2: {screen: SearchScreen2},
});

export default HomeStack;
