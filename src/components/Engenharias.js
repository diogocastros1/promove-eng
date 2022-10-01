import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Engenharias extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_engenharias.jpg')}
          style={styles.background}
        >
          <View style={styles.body}>

            <View style={styles.botoes}>

              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engInatel() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Engenharias do Inatel</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engBrasil() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Engenharias do Brasil</Text>
              </TouchableHighlight>
            </View>            
          </View>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              onPress={() => { Actions.home() }}
              underlayColor='rgba(12,165,143,0.8)'
              style={styles.btnSair}
            >
              <Text style={styles.txtBtnSair}>Voltar</Text>
            </TouchableHighlight>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  }, 
  background: {
    flex: 1,
       
  },
  body: {
    flex: 1,    
  },
  botoes: {
    paddingTop: 160,
    marginHorizontal: 15,
    alignItems: 'center',
    flex: 1,
    
  },
  caixaBtn: {
    height: '10%',
    width: '100%',
    backgroundColor: 'rgb(12,165,143)',
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    marginBottom: 30
  },
  tituloBtn: {
    color: '#fff',
    fontSize: 30,
    fontFamily: 'Bruzh',
    textAlign: 'center',
  },
  btnSairAlign: {
    alignItems: 'center',
    marginBottom: 20
  },
  btnSair: {
    width: 120,
    height: 40,
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    marginTop: 10,
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

export default Engenharias;
