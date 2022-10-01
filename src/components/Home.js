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

class Home extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />

        <ImageBackground
          source={require('../imgs/bg_home.jpg')}
          style={styles.background}
        >
          <View style={styles.body}>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => Actions.inatel()}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>O Inatel</Text>
                  {/* <Text style={styles.descricaoBtn}>conheça um pouco mais sobre o Inatel</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => Actions.vestibular()}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Vestibular</Text>
                  {/* <Text style={styles.descricaoBtn}>acesse o material para te auxiliar nos estudos do nosso vestibular.</Text> */}
                </View>
              </TouchableHighlight>

            </View>

            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => Actions.engenharias()}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Engenharias</Text>
                  {/* <Text style={styles.descricaoBtn}>entenda um pouco sobre as Engenharias do nosso País.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => Actions.agenda()}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Agenda</Text>
                  {/* <Text style={styles.descricaoBtn}>clique aqui para saber quando estaremos em sua cidade.</Text> */}
                </View>
              </TouchableHighlight>

            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => Actions.bolsas()}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <Text style={styles.tituloBtn}>Bolsas de Estudos</Text>
                {/* <Text style={styles.descricaoBtn}>faça uma simulação da bolsa de estudos.</Text> */}
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.caixaBtn}
                onPress={() => Actions.equipes()}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <Text style={styles.tituloBtn}>Equipes</Text>
                {/* <Text style={styles.descricaoBtn}>conheça os labs das nossas equipes de Robótica, Games, Biomédica, IoT e muito mais.</Text> */}
              </TouchableHighlight>
            </View>

            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => Actions.contatos()}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Contatos</Text>
                  {/* <Text style={styles.descricaoBtn}>entre em contato conosco.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => Actions.perfil()}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.5)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Perfil</Text>
                  {/* <Text style={styles.descricaoBtn}>altere seus dados.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.btnSairAlign}>
            <TouchableHighlight
              onPress={() => Actions.login()}
              underlayColor='rgba(12,165,143,0.5)'
              style={styles.btnSair}
            >
              <Text style={styles.txtBtnSair}>Sair</Text>
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
    width: '100%',
    paddingTop: 120
  },
  body: {
    flex: 1,
    justifyContent: 'center',
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



export default Home;