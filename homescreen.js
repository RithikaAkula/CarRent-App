import React from 'react';
import {View, Button, Text} from 'react-native';

import styles from './styles';
import SearchScreen2 from './searchscreen2';
import CustomHeader from './customheader';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
        <View>
          <View style={styles.header}>
          <CustomHeader navigation = {this.props.navigation}/>
          </View>
          <View style = {styles.end}>
            <Button
              title = "Search for cars"
              onPress={() => this.props.navigation.navigate('SearchScreen2')}
            />
          </View>
        </View>
    );
  }
};
