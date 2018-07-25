import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image
} from 'react-native';

const voltar = require('../img/botao_voltar.png')

export default class SobreJogo extends Component {
  static navigationOptions = {
    header: null
  }
  render() {
    return (
      <View style={generalView}>
      <View>
        <TouchableOpacity style={buttonStyle} onPress={() => this.props.navigation.goBack()} >
          <Image source={voltar}/>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={text}>Aqui você encontra sobre outros jogos</Text>
      </View>
      </View>
    )
    
  }
}

const styles = StyleSheet.create({
 generalView: {
   flex: 1,
   backgroundColor: '#61db8c'
 },
 text: {
  padding: 15,
  textAlign: 'justify'
 },
 buttonStyle:{
   marginLeft: 5,
   marginTop: 20
 }
});

const {generalView, text, buttonStyle} = styles