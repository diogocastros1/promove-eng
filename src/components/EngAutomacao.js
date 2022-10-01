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

class EngAutomacao extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_eng_automacao.jpg')}
          style={styles.background}
        >
          <ScrollView style={styles.body}>

            <View style={styles.containerMovie}>

              <WebView
                style={styles.movie}
                javaScriptEnabled={true}
                domStorageEnabled={true}
                source={{ uri: 'https://www.youtube.com/embed/rRwpo2Xo_fw' }}
              />

            </View>
            {/* <Text style={styles.txtTitulo}>Descrição</Text> */}

            <View style={styles.caixaDescricao}>
              <Text style={styles.txtDescricao}>
                Desde 2012, o Inatel oferece o Curso de Engenharia de Controle e Automação,
                que atende uma demanda de vários setores - elétrico, eletrônico, telecomunicações,
                petrolífero, mineração, automobilístico, celulose, ferroviária, entre outras áreas.
                A grade do curso de Engenharia de Controle e Automação combina matemática, física,
                mecânica, eletroeletrônica, informática e telecomunicações, além de disciplinas ligadas
                ao meio ambiente, saúde, direito e empreendedorismo.
              </Text>
            </View>

            {/* <TouchableHighlight
              style={styles.imagem}
              onPress={() => Linking.openURL('https://inatel.br/vestibular/cursos/engenharia-de-controle-e-automacao')}
              underlayColor='rgba(12,165,143,0.8)'
            >
              <Image
                source={require('../imgs/videoAutomacao.png')}
                style={styles.formatoImg}
              />
            </TouchableHighlight> */}
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
  containerMovie: {
    flex: 1,
  },
  movie: {
    marginVertical: 20,
    width: '100%',
    height: 230,
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
    height: 220,
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



export default EngAutomacao;      