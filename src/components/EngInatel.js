
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

class EngInatel extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_engInatel.jpg')}
          style={styles.background}
        >
          <ScrollView style={styles.body}>

            <View style={styles.botoes}>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engTelecom() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Eng. de Telecomunicações</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engComputacao() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Eng. de Computação</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engEletrica() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Eng. de Elétrica</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engAutomacao() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Eng. de Controle e Automação</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engBiomedica() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Eng. de Biomédica</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engSoftware() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Eng. de Software</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Actions.engProducao() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Eng. de Produção</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.engenharias() }}
              underlayColor='rgba(12,165,143,0.8)'
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
    paddingTop: 150
  },
  body: {
    flex: 1,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    alignItems: 'center',
  },
  caixaBtn: {
    height: 70,
    width: '45%',
    borderColor: 'rgb(30,56,96)',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    padding: 5,
    
  },
  tituloBtn: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'Bruzh'
  },
  descricaoBtn: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    padding: 5,
  },
  btnSairAlign: {
    alignItems: 'center',
    margin: 20
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
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

export default EngInatel;
