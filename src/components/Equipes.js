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

class Equipes extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />

        <ImageBackground
          source={require('../imgs/bg_equipes.jpg')}
          style={styles.background}
        >
          <View style={styles.body}>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { true }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>RobotBulls</Text>
                  {/* <Text style={styles.descricaoBtn}>conheça um pouco mais sobre o Inatel</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { true }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>CodeTroopers</Text>
                  {/* <Text style={styles.descricaoBtn}>acesse o material para te auxiliar nos estudos do nosso vestibular.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { true }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>E-Sports</Text>
                  {/* <Text style={styles.descricaoBtn}>conheça um pouco mais sobre o Inatel</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { true }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>CDTTA</Text>
                  {/* <Text style={styles.descricaoBtn}>acesse o material para te auxiliar nos estudos do nosso vestibular.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { true }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>IoT</Text>
                  {/* <Text style={styles.descricaoBtn}>conheça um pouco mais sobre o Inatel</Text> */}
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.btnSairAlign}>
            <View>
              <TouchableHighlight
                onPress={() => { Actions.home() }}
                underlayColor='rgba(12,165,143,0.8)'
                style={styles.btnSair}
              >
                <Text style={styles.txtBtnSair}>Voltar</Text>
              </TouchableHighlight>
            </View>
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
    marginTop: 190,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
    alignItems: 'center',
  },
  caixaBtn: {
    height: 70,
    width: '40%',
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    borderRadius: 5,
    paddingHorizontal: 5
  },
  tituloBtn: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh',
    textAlign: 'center',
  },
  descricaoBtn: {
    color: '#fff',
    fontSize: 12,
    textAlign: 'center',
    padding: 5,
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

export default Equipes;
