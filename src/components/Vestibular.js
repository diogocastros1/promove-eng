import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  Linking,
  ImageBackground,
} from 'react-native';
import { Actions } from 'react-native-router-flux';

class Vestibular extends Component {
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
          <View style={styles.body}>
            <View style={styles.botoes}>
              <TouchableHighlight
                //onPress={() => { Linking.openURL('https://siteseguro.inatel.br/vestibular/inscricao/inscricao-vestibular/') }}
                onPress={() => { Actions.inscrever() }}
                style={styles.caixaBtn}
                underlayColor='rgba(0,0,0, 0.1)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Inscreva-se</Text>
                  {/* <Text style={styles.descricaoBtn}>venha fazer parte da nossa família.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { Linking.openURL('https://inatel.br/vestibular/inscricoes/edital-do-vestibular') }}
                style={styles.caixaBtn}
                underlayColor='rgba(0,0,0, 0.1)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Edital</Text>
                  {/* <Text style={styles.descricaoBtn}>veja tudo que precisa saber sobre a prova.</Text> */}
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { Linking.openURL('https://www.instagram.com/promoveengenharia/') }}
                style={styles.caixaBtn}
                underlayColor='rgba(0,0,0, 0.1)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Dicas</Text>
                  {/* <Text style={styles.descricaoBtn}>dicas incriveis da nossa equipe.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { Actions.selecaoSimulado() }}
                style={styles.caixaBtn}
                underlayColor='rgba(0,0,0, 0.1)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Simulado</Text>
                  {/* <Text style={styles.descricaoBtn}>treine de um jeito diferente. </Text> */}
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.botoes}>
              <TouchableHighlight
                // onPress={() => { Linking.openURL('https://siteseguro.inatel.br/vestibular/acesso/seguranca/login?returnUrl=/vestibular/painel-de-controle') }}
                onPress={() => { Actions.resultadoVest() }}
                style={styles.caixaBtn}
                underlayColor='rgba(0,0,0, 0.1)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Resultado</Text>
                  {/* <Text style={styles.descricaoBtn}>acesse sua colocação no vestibular.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.botoes}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.home() }}
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
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
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



export default Vestibular;