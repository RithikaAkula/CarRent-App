import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';

export default class ForgotPassScreen extends React.Component {
  staticNavigationOptions = {
    title: 'Verify your email'
  };
  render() {
    return (
      <View style = {styles.container}>
      <Text style = {{fontSize: 24}}>
        <Text style = {styles.TextStyle2} onPress = {() => alert('Mail sent.')}>Click</Text> to send verification mail to registered email address.
      </Text>
      </View>
    );
  }
}
