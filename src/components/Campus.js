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

class Campus extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <ImageBackground
          source={require('../imgs/bg_campus.jpg')}
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
                onPress={() => { Actions.campus() }}
                style={styles.caixaBtnMedio}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Mapa do Campus</Text>
                  {/* <Text style={styles.descricaoBtn}>se localize.</Text> */}
                </View>
              </TouchableHighlight>
            </View>

            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { Actions.campus() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Fotos</Text>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => { Actions.tour() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Tour</Text>
              </TouchableHighlight>
            </View>
          </ScrollView>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              onPress={() => Actions.inatel()}
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
    marginTop: 160,
    flex: 1,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
    alignItems: 'center',
    
  },
  caixaBtnMedio: {
    height: 150,
    width: '90%',
    backgroundColor: 'rgb(12,165,143)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,    
  },
  caixaBtn: {
    height: 130,
    width: 130,
    backgroundColor: 'rgb(12,165,143)',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,    
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
    backgroundColor: 'rgb(12,165,143)'
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})



export default Campus;