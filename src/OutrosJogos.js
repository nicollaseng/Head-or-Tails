import React, { Component } from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';

export default class OutrosJogos extends Component {
  render() {
    return 
      <View style={generalView}>
        <Text>Aqui você encontra sobre outros jogos</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
 generalView: {
   flex: 1,
   backgroundColor: '#61db8c'
 }  
});

const {generalView} = styles