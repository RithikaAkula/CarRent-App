import React from 'react';
import {View, Text, TextInput, Button} from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import styles from './styles';
import SigninScreen from './signinscreen';
import ForgotPassScreen from './forgotpassscreen';
import DrawerNavigator from './drawernav';

export default class LoginScreen extends React.Component {
  staticNavigationOptions = {
    title: 'Home'
  };
  constructor(props){
    super(props)
    this.state={"boxOne":""};
    this.state={"boxTwo":""}
  }
  render() {
    return (
        <View>
          <View style={style={alignItems: 'center', paddingVertical: 20}}>
            <Ionicons name="ios-people" style={{ color: 'black', fontSize: 44}} />
          </View>
          <View style={styles.container}>
            <Text style={styles.TextStyle3}>{"\n"}{"\n"}{"\n"}New user?{"\n"}
            <Text style = {styles.TextStyle2} onPress = { () => this.props.navigation.navigate('SigninScreen')}>SIGN UP</Text>{"\n"}{"\n"}{"\n"}
            Login:-{"\n"}{"\n"}</Text>

            <Text style={styles.TextStyle1} alignItems='left'>Email:</Text>
            <TextInput value={this.state.boxOne}
              style={styles.box}
              onChangeText={(boxOne)=>this.setState({boxOne})}/>

            <Text style={styles.TextStyle1} alignItems='left'>{"\n"}Password:</Text>
            <TextInput value={this.state.boxTwo}
              style={styles.box}
              secureTextEntry = {true}
              onChangeText={(boxTwo)=>this.setState({boxTwo})}/>

          </View>
          <View style={styles.end}>
            <Button title="LOGIN"
              onPress={() => {this.props.navigation.navigate('DrawerNavigator')}}
            />
            <Text style={styles.TextStyle2}
              onPress={() => this.props.navigation.navigate('ForgotPassScreen')}>
              {"\n"}Forgot Password ?
            </Text>
          </View>

        </View>
    );
  }
}
