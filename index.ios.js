import React, { Component } from 'react';
import Principal from './src/Principal.js'
import {
  AppRegistry,
  StyleSheet,
} from 'react-native';

export default class app6 extends Component {
  render() {
    return (
      <Principal />
    );
  }
}

const styles = StyleSheet.create({
 
});

AppRegistry.registerComponent('app6', () => app6);

const {generalView, logoStyle, jogarStyle} = styles