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

class Tour extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />

        <ImageBackground
          source={require('../imgs/bg_campus.jpg')}
          style={styles.background}
        >
          <View style={styles.body}>

            <View style={styles.containerWeb}>

              <WebView
                style={styles.web}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.google.com/maps/place/Instituto+Nacional+de+Telecomunica%C3%A7%C3%B5es+-+Inatel/@-22.2572243,-45.6959756,3a,75y,280h,90t/data=!3m8!1e1!3m6!1sAF1QipNKdyDL_4Qa47dZcfelO1tVEObqUd3yrLd2yK_a!2e10!3e11!6shttps:%2F%2Flh5.googleusercontent.com%2Fp%2FAF1QipNKdyDL_4Qa47dZcfelO1tVEObqUd3yrLd2yK_a%3Dw203-h100-k-no-pi-0-ya152.1831-ro-0-fo100!7i7200!8i3600!4m7!3m6!1s0x0:0xbbedf16822a092a9!8m2!3d-22.256897!4d-45.696977!14m1!1BCgIgAQ'}}
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

export default Tour;
