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

class Inatel extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_o_inatel.jpg')}
          style={styles.background}
        >
          <View style={styles.body}>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { Actions.campus() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Campus</Text>
                  {/* <Text style={styles.descricaoBtn}>veja tudo que oferecemos em nosso campus.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { Actions.ondeFica() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Onde fica?</Text>
                  {/* <Text style={styles.descricaoBtn}>conheça mais sobre nossa cidade.</Text> */}
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { Actions.projetos() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Projetos</Text>
                  {/* <Text style={styles.descricaoBtn}>veja os projetos que podemos levar para seu colégio.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              onPress={() => Actions.home()}
              underlayColor='rgba(12,165,143,0.5)'
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
    paddingTop: 160,
  },
  body: {
    flex: 1,    
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
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
  },
  btnSair: {
    width: 120,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    borderWidth: 1,
    borderColor: 'rgb(30,56,96)',
    marginBottom: 20,
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

export default Inatel;
