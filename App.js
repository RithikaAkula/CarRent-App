import React from 'react';
import { createAppContainer, createStackNavigator } from 'react-navigation';

import styles from './styles';
import DrawerNavigator from './drawernav';
import HomeStack from './stacknav';

import LoginScreen from './loginscreen';
import ForgotPassScreen from './forgotpassscreen';
import SigninScreen from './signinscreen';


const PrimaryNav = createStackNavigator ({
  firstPage: {screen: LoginScreen},
  ForgotPassScreen: {screen: ForgotPassScreen},
  SigninScreen: {screen: SigninScreen},
  DrawerNavigator: {screen: DrawerNavigator}
},
{
  headerMode: 'none',
  title: 'main',
  initialRouteName: 'firstPage',
});

export default createAppContainer(PrimaryNav);