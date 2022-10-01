import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Image,
  Linking,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { WebView } from 'react-native-webview'

class EngTelecom extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_eng_telecom.jpg')}
          style={styles.background}
        >
          <ScrollView style={styles.body}>
            
            {/* <TouchableHighlight
              style={styles.imagem}
              onPress={() => Linking.openURL('https://inatel.br/vestibular/cursos/engenharia-de-telecomunicacoes')}
              underlayColor='rgba(12,165,143,0.8)'
            >
              <Image
                source={require('../imgs/videoTelecom.png')}
                style={styles.formatoImg}
              />
            </TouchableHighlight> */}
            <View style={styles.containerMovie}>

              <WebView
                style={styles.movie}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.youtube.com/embed/Pt-u-pnyxG4'}}
              />

            </View>

            <View style={styles.caixaDescricao}>
              {/* <Text style={styles.txtTitulo}>Descrição</Text> */}
              <Text style={styles.txtDescricao}>
                O curso de Engenharia de Telecomunicações do Inatel foi o primeiro
                a ser criado no Brasil, em 1965. É pioneiro e referência no ensino
                e no desenvolvimento das Telecomunicações no país.
              </Text>
            </View>
          </ScrollView>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.engInatel() }}
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
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 160
  },
  caixaDescricao: {
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    //marginTop: 10,
    padding: 10,
  },
  containerMovie: {
    flex: 1,
  },
  movie: {
    marginVertical: 20,
    width: '100%',
    height: 230,
  },
  txtTitulo: {
    fontSize: 18,
    color: '#2094E8',
    fontFamily: 'Bruzh'
  },
  txtDescricao: {
    fontSize: 18,
    color: '#2094E8',
    fontFamily: 'Bruzh',
    textAlign: 'center',
    color: '#fff'
  },

  botao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
    alignItems: 'center',
  },
  imagem: {
    flex: 1,
    alignItems: 'center',
    // paddingHorizontal: 10,
    marginTop: 20
  },
  formatoImg: {
    borderRadius: 10,
    width: 320,
    height: 250,
  },
  btnSairAlign: {
    alignItems: 'center',
    margin: 20,
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



export default EngTelecom;      