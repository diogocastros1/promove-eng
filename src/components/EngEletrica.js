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

class EngEletrica extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_eng_eletrica.jpg')}
          style={styles.background}
        >
          <ScrollView style={styles.body}>
            <View style={styles.caixaDescricao}>
              {/* <Text style={styles.txtTitulo}>Descrição</Text> */}
              <Text style={styles.txtDescricao}>
                O curso de Engenharia Elétrica é o ramo da engenharia que trabalha
                com os estudos e aplicações da eletricidade, eletromagnetismo e eletrônica.
                No Inatel, o curso prepara o profissional com sólida formação técnico-científica,
                generalista e complementada com componentes de empreendedorismo.
              </Text>
            </View>
            <Text style={styles.txtTituloImg}>Clique na imagem para saber mais.</Text>
            <TouchableHighlight
              style={styles.imagem}
              onPress={() => Linking.openURL('https://inatel.br/vestibular/cursos/engenharia-eletrica')}
              underlayColor='rgba(12,165,143,0.8)'
            >
              <Image
                source={require('../imgs/engenharia-eletrica.jpg')}
                style={styles.formatoImg}
              />
            </TouchableHighlight>
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
  txtTituloImg: {
    fontSize: 18,
    color: 'rgb(12,165,143)',
    fontFamily: 'Bruzh',
    textAlign: 'center',
    marginTop: 20,
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
    padding: 10
  },
  formatoImg: {
    borderRadius: 10,
    width: 320,
    height: 250
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



export default EngEletrica;      