import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({

  container: {
    flex: 1,
    paddingTop: 150,
    paddingLeft: 20,
    justifyContent: 'center',
  },

  content: {
    flex: 1,
    paddingTop: 5,
    alignItems: 'center',
  },

  content2: {
    flex: 1,
    paddingTop: 80,
    paddingLeft: 40,

  },

  box: {
    height: 40,
    width:"50%",
    backgroundColor:'grey',
  },

  TextStyle1: {
    fontSize: 20,
    color: 'blue',
  },

  TextStyle2: {
    fontSize: 24,
    color: 'red',
    textDecorationLine: 'underline',
  },

  TextStyle3: {
    fontSize: 24,
    color: 'black',
  },

  TextStyle4: {
    fontSize: 24,
    color: 'skyblue',
  },

  TextStyle5: {
    fontSize: 22,
    color: 'skyblue',
    textDecorationLine: 'underline',

  },

  Heading: {
    fontSize: 26,
    color: 'black',
  },

  header: {
    height: 80,
    paddingLeft: 10,
    backgroundColor:'white',
    paddingVertical: 20,
  },

  end: {
    paddingHorizontal:40,
    paddingTop: 250,
    justifyContent: 'center',
  },

  item: {
    backgroundColor: 'white',
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 8,
  },

  thumb: {
    height: 50,
    width: 50,
    borderRadius: 18,
    alignItems: 'center',
    justifyContent: 'center',
  },

  details: {
    margin: 16,
  },

  title: {
    fontSize: 18,
    color: 'black',
  },

  author: {
    fontSize: 16,
    color: '#999',
  },
});

export default styles;
