import React from 'react';
import {View, Text, Linking} from 'react-native';

import styles from './styles';
import CustomHeader from './customheader';
import { Entypo, AntDesign } from '@expo/vector-icons';

export default class ContactScreen extends React.Component {
  staticNavigationOptions = {
    title: 'Contact us'
  };
  dialCall = () => {
 
    let phoneNumber = '';
    phoneNumber = 'tel:${4567891230}';
    Linking.openURL(phoneNumber);
  };

  render() {
    return (
      <View>
        <View style = {styles.header}>
        <CustomHeader navigation = {this.props.navigation}/>
        </View>
        <View style = {styles.content2}>
          <Text style = {{fontSize: 24}} >Mail:
          </Text>
          <Text style = {styles.TextStyle5} onPress={() => Linking.openURL('mailto:carrent123@gmail.com') }>carrent123@gmail.com{"\n"}</Text>
          <Text style = {{fontSize: 24}}>Phone:
          </Text>
          <Text style = {styles.TextStyle5} onPress={this.dialCall}>+91 4567891230{"\n"}</Text>
          <Text style = {{fontSize: 24}}>Follow us on:
          </Text>
        </View>
        <View style={{ flexDirection: 'row',paddingLeft: 40, paddingTop: 210}}>
          <Entypo
            name = "facebook"
            size = {40}
            color = "black"
            onPress={ ()=> Linking.openURL('https://www.facebook.com/') }
          /><Text>    </Text>
          <AntDesign
            name = "instagram"
            size = {40}
            color = "black"
            onPress={ ()=> Linking.openURL('https://www.instagram.com/') }
          /><Text>    </Text>
          <AntDesign
            name = "twitter"
            size = {40}
            color = "black"
            onPress={ ()=> Linking.openURL('https://twitter.com/') }
          />
        </View>
      </View>
    );
  }
}