/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */

import React, {
  Component,
} from 'react';

import {
  AppRegistry,
  Image,
  ListView,
  StyleSheet,
  Text,
  View,
  PixelRatio,
} from 'react-native';

class Header extends Component {
  render() {
    return (
      <View style={style.container}>
        <Text style={style.fontCommon}>
          <Text style={style.font1}>网易</Text>
          <Text style={style.font2}>新闻</Text>
          <Text>有态度</Text>
        </Text>
      </View>
    );
  }
}

var style = StyleSheet.create({
  container: {
    height: 50,
    alignItems: 'center',
    borderBottomWidth: 3/PixelRatio.get(),
    borderBottomColor: '#EF2D36',
    justifyContent: 'center',
  },
  fontCommon: {
    fontSize: 25,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  font1: {
    color: '#CD1D1C',
  },
  font2: {
    color: '#FFFFFF',
    backgroundColor: '#CD1D1C',
  },
});

module.exports=Header;