import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  TouchableOpacity
} from 'react-native';

const cara = require('../img/moeda_cara.png')
const coroa = require('../img/moeda_coroa.png')
const voltar = require('../img/botao_voltar.png')

export default class Resultado extends Component {
static navigationOptions = {
    header: null
}

constructor(props){
    super(props)
    this.state ={
        ladoMoeda: ""
    }
}

mudaLadoMoeda(){
    var aleatorio = Math.floor(Math.random()*2)
    if(aleatorio === 0){
       return <Image source={cara}/>
    }else{
        return <Image source={coroa}/>
    }
}

  render() {
    return (
      <View style={generalView}>
      <TouchableOpacity onPress={() => this.props.navigation.goBack()} >
        <Image source={voltar}/>
      </TouchableOpacity>
        {/* <Image source={cara}/>
        <Image source={coroa}/> */}
        {this.mudaLadoMoeda()}
      </View>
    )
  }
}

const styles = StyleSheet.create({
 generalView: {
   flex: 1,
   backgroundColor: '#61db8c',
   justifyContent: 'space-around',
   alignItems: 'center'
 }  
});

const {generalView} = styles