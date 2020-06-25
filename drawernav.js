import React from 'react';
import {createDrawerNavigator} from 'react-navigation';
import { Ionicons } from '@expo/vector-icons';

import ContactScreen from './contactscreen';
import HomeStack from './stacknav';
import ManualScreen from './manualscreen';

const DrawerNavigator = createDrawerNavigator({

  Home: {
    screen:  HomeStack,
    navigationOptions: {
      drawerIcon: ({ tintColor }) => (
        <Ionicons name="md-home" style={{ color: tintColor, fontSize: 24}} />
      ),
      drawerLabel: "Home"
    }
  },
  
  Contact: {
    screen:ContactScreen,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Ionicons name = "md-call" style = {{color: tintColor, fontSize: 24}} />
      ),
      drawerLabel: "Contact us"
    }
  },
  
  Manual: {
    screen:ManualScreen,
    navigationOptions: {
      drawerIcon: ({tintColor}) => (
        <Ionicons name = "ios-car" style = {{color: tintColor, fontSize: 24}} />
      ),
      drawerLabel: "How we work"
    }
  },
});

export default DrawerNavigator;
