
import React from 'react';
import {View, Text} from 'react-native';

import styles from './styles';
import CustomHeader from './customheader';
import { Ionicons, MaterialCommunityIcons,MaterialIcons } from '@expo/vector-icons';

export default class ManualScreen extends React.Component {
  staticNavigationOptions = {
    title: 'How we work'
  };
  render() {
    return (
      <View>
        <View style={styles.header}>
          <CustomHeader navigation = {this.props.navigation}/>
        </View>
        <View style={styles.content}>
          
          <MaterialIcons
            name = "attach-money"
            size = {85}
            color = "black"
          />
          <Text style = {styles.Heading}>Book and Pay{"\n"}
          </Text>
          <Ionicons
            name = "ios-car"
            size = {85}
            color = "black"
          />
          <Text style = {styles.Heading}>Receive your Ride{"\n"}
          </Text>
          <MaterialCommunityIcons
            name = "steering"
            size = {85}
            color = "black"
          />
          <Text style = {styles.Heading}>Drive{"\n"}
          </Text>
          <Ionicons
            name = "ios-return-left"
            size = {85}
            color = "black"
          />
          <Text style = {styles.Heading}>Return{"\n"}
          </Text>
        </View>
      </View>
    );
  }
}
