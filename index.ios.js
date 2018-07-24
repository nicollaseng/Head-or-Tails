import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image
} from 'react-native';

const botao_jogar = require('./img/botao_jogar.png')
const logo = require('./img/logo.png')
const sobre_jogo = require('./img/sobre_jogo.png')
const outros_jogos = require('./img/outros_jogos.png')

export default class app6 extends Component {
  render() {
    return (
      <View style={generalView}>
        <View style={logoStyle}>
          <Image source={logo}/>
          <Image source={botao_jogar}/>
        </View>
        <View style={jogarStyle}>
        <Image source={sobre_jogo}/>
        <Image source={outros_jogos}/>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 generalView: {
   flex: 1,
   backgroundColor: '#61db8c'
 },
 logoStyle: {
   flex:10,
   justifyContent: 'center',
   alignItems: 'center'
 },
  jogarStyle: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  }
});

AppRegistry.registerComponent('app6', () => app6);

const {generalView, logoStyle, jogarStyle} = styles