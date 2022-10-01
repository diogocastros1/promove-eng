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

class Projetos extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <ImageBackground
          source={require('../imgs/bg_projetos.jpg')}
          style={styles.background}
        >
          <StatusBar
            backgroundColor='rgba(255,255,255, 0.3)'
            translucent
            barStyle='dark-content'
          />
          <ScrollView style={styles.body}>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { Actions.arduino() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Arduino Challenge</Text>
                  {/* <Text style={styles.descricaoBtn}>uma competição de robótica.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { Actions.programacao() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Programação 1.0</Text>
                  {/* <Text style={styles.descricaoBtn}>uma competição de programação.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
          </ScrollView>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.inatel() }}
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
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
    alignItems: 'center',
  },
  caixaBtn: {
    height: 70,
    width: 150,
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

export default Projetos;
