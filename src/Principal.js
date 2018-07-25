import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  TouchableOpacity,
  View,
  Image
} from 'react-native';

const botao_jogar = require('../img/botao_jogar.png')
const logo = require('../img/logo.png')
const sobre_jogo = require('../img/sobre_jogo.png')
const outros_jogos = require('../img/outros_jogos.png')

export default class Principal extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={generalView}>
        <View style={logoStyle}>
          <Image source={logo}/>
          <TouchableOpacity onPress={() => this.props.navigation.navigate('resultado')}>
            <Image source={botao_jogar}/>
          </TouchableOpacity>
        </View>
        <View style={jogarStyle}>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('sobre')}>
          <Image source={sobre_jogo}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.props.navigation.navigate('outro')}>
          <Image source={outros_jogos}/>
        </TouchableOpacity>
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