import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Linking,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Arduino extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <ImageBackground
          source={require('../imgs/bg_arduino_challenge.jpg')}
          style={styles.background}
        >
          <StatusBar
            backgroundColor='rgba(255,255,255, 0.3)'
            translucent
            barStyle='dark-content'
          />
          <ScrollView style={styles.body}>
            <View style={styles.caixas}>
              <View style={styles.caixaInfo}>
                <Text style={styles.descricaoBtn}>
                  Um programa de iniciação à Engenharia, que visa mostrar aos seus participantes uma das
                  várias facetas que essa modalidade pode adquirir, usando como principal motivador uma
                  competição de robótica. O projeto não oferece custos para os colégios subsidiados.
                  Os interessados podem entrar em contato conosco pelo e-mail promove@inatel.br ou
                  pelo telefone: (35)3471-9345.
            </Text>
              </View>
            </View>

            <View style={styles.caixas}>
              <TouchableHighlight
                //onPress={() => { Linking.openURL('https://www.instagram.com/promoveengenharia/') }}
                onPress={() => {Actions.galeriaArduino()}}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Galeria de Fotos</Text>
                  {/* <Text style={styles.descricaoBtn}>veja as fotos da ultima edição.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.projetos() }}
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
    paddingTop: 160,
  },
  body: {
    flex: 1,
  },
  caixas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 15
  },
  caixaInfo: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    backgroundColor: 'rgb(12,165,143)',
  },
  tituloBtn: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Bruzh'
  },
  caixaBtn: {
    flex: 1,
    height: 100,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    backgroundColor: 'rgb(12,165,143)',
  },

  descricaoBtn: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center',
    padding: 10,
    fontFamily: 'Bruzh'

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

export default Arduino;
