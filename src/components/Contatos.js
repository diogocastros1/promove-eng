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

class Contatos extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <ImageBackground
          source={require('../imgs/bg_contatos.jpg')}
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
                style={styles.caixaBtn}
                onPress={() => { Linking.openURL('whatsapp://send?text=Oi&phone=+553599849823') }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Whatsapp</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Linking.openURL('instagram://') }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Instagram</Text>
              </TouchableHighlight>
            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Linking.openURL('https://www.facebook.com/inatelpromoveengenharia/') }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>Facebook</Text>
              </TouchableHighlight>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => { Linking.openURL() }}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <Text style={styles.tituloBtn}>E-mail</Text>
              </TouchableHighlight>
            </View>

            <View style={styles.botoes}>
              <View style={styles.caixaTxtInfo}>
                <Text style={styles.tituloBtn}>Telefone: (35) 3471-9345</Text>
                <Text style={styles.tituloBtn}>Horário de Funcionamento:</Text>
                <Text style={styles.tituloBtn}>08h00 às 12h00</Text>
                <Text style={styles.tituloBtn}>13h00 às 17h00</Text>
              </View>
            </View>

          </ScrollView>
          <View style={styles.btnSairAlign}>
              <TouchableHighlight
                style={styles.btnSair}
                onPress={() => { Actions.home() }}
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
    flex:1,
    paddingTop: 160,
  },
  body:{
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
  caixaTxtInfo: {
    height: 150,
    width: 300,
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
    marginTop: 10,
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})



export default Contatos;

