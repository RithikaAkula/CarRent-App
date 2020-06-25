import React from 'react';
import {View} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import {createDrawerNavigator} from 'react-navigation';

import styles from './styles';

const CustomHeader = ({navigation}) => (
  <View style = {styles.header}>
    <Ionicons
      name = "md-arrow-dropright"
      size = {42}
      color = "black"
      onPress = {() => navigation.openDrawer()}
    />
    </View>
);

export default CustomHeader;
