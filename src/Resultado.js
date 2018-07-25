import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Image,
  Alert
} from 'react-native';

const cara = require('../img/moeda_cara.png')
const coroa = require('../img/moeda_coroa.png')

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
   justifyContent: 'center',
   alignItems: 'center'
 }  
});

const {generalView} = styles