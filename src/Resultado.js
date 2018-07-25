import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image
} from 'react-native';

const cara = require('../img/moeda_cara.png')
const coroa = require('../img/moeda_coroa.png')

export default class Resultado extends Component {
static navigationOptions = {
    header: null
}
  render() {
    return (
      <View style={generalView}>
        <Image source={cara}/>
        <Image source={coroa}/>
      </View>
    )
  }
}

const styles = StyleSheet.create({
 generalView: {
   flex: 1,
   backgroundColor: '#61db8c',
   flexDirection: 'column',
   alignItems: 'center'
 }  
});

const {generalView} = styles