import React, { Component } from 'react';
import Principal from './src/Principal.js'
import SobreJogo from './src/SobreJogo.js'
import OutrosJogos from './src/OutrosJogos.js'
import Resultado from './src/Resultado.js'
import {createStackNavigator} from 'react-navigation'
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

const AppNavigator = createStackNavigator({
  home: Principal,
  sobre: SobreJogo,
  outro: OutrosJogos,
  resultado: Resultado
})
export default class app6 extends Component {
  render() {
    return (
     <AppNavigator />
    );
  }
}

const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('app6', () => app6);
