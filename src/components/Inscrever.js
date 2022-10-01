import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,

  ImageBackground,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview'

class Inscrever extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_vestibular.jpg')}
          style={styles.background}
        >
          <View style={styles.containerWeb}>

            <WebView
              style={styles.web}
              javaScriptEnabled={true}
              domStorageEnabled={true}
              source={{ uri: 'https://siteseguro.inatel.br/vestibular/inscricao/inscricao-vestibular/' }}
            />

          </View>
          <View style={styles.botoes}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.vestibular() }}
              underlayColor='rgba(0,0,0, 0.1)'
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
    justifyContent: 'center',
  },
  containerWeb: {
    flex: 1,
    marginTop: 120,
    paddingHorizontal: 10
  },
  web: {
    marginVertical: 20,
    width: '100%',
    height: 230,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
    alignItems: 'center',
  },
  caixaBtn: {
    height: 60,
    width: '40%',
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    borderRadius: 5,
  },
  tituloBtn: {
    color: '#fff',
    fontSize: 25,
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
    margin: 10
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



export default Inscrever;