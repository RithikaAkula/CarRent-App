import React from 'react';
import {View, Text, TextInput, Button, Linking} from 'react-native';

import styles from './styles';

export default class SearchScreen2 extends React.Component {
  static navigationOptions = {
    title: 'Search'
  };
  
  render() {
    return (
        <View style={styles.container}>
          <View style = {styles.end}>
            <Button title="go"
              onPress={ ()=> Linking.openURL('https://www.discovercarhire.com/?a_aid=aru_akula') }
            />
          </View>
        </View>
    );
  }
}
