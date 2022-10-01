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

class GaleriaArduino extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />

        <ImageBackground
          source={require('../imgs/bg_arduino_challenge.jpg')}
          style={styles.background}
        >
          <View style={styles.body}>

            <View style={styles.containerWeb}>

              <WebView
                style={styles.web}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.instagram.com/promoveengenharia/'}}
              />
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
  containerWeb: {
    flex: 1,
    marginTop: 170,
    paddingHorizontal: 10
  },
  web: {
    marginVertical: 20,
    width: '100%',
    height: 230,
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

export default GaleriaArduino;
