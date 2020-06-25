import React from 'react';
import {View, Text} from 'react-native';
//import {CheckBox} from 'react-native-check-box';

import styles from "./styles";

export default class SigninScreen extends React.Component {
  staticNavigationOptions = {
    title: 'Sign up'
  };
  render() {
    return (
      <View style = {styles.container}>
        <Text style= {{fontSize: 24}}>Select Language Preferances</Text>
        
      </View>
    );
  }
};
