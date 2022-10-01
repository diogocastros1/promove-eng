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

class EngProducao extends Component {
  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_eng_producao.jpg')}
          style={styles.background}
        >
          <ScrollView style={styles.body}>
            <View style={styles.caixaDescricao}>
              {/* <Text style={styles.txtTitulo}>Descrição</Text> */}
              <Text style={styles.txtDescricao}>
                O curso de Engenharia de Produção foi criado baseado na experiência da instituição com os demais
                cursos de engenharia e com o Curso Superior de Tecnologia em Gestão de Telecomunicações.
                Para formar um profissional capacitado, o Curso de Engenharia da Produção compreende conteúdos
                de Matemática, Física, Eletrônica, Computação, Empreendedorismo e Inovação, Gestão de Projetos,
                Gestão da Produção, Finanças, Marketing, Design, Redes Industriais, Planejamento Estratégico, entre outros.
            </Text>
            </View>

            <Text style={styles.txtTituloImg}>Clique na imagem para saber mais.</Text>
            <TouchableHighlight
              style={styles.imagem}
              onPress={() => Linking.openURL('https://inatel.br/vestibular/cursos/engenharia-de-producao')}
              underlayColor='rgba(12,165,143,0.8)'
            >
              <Image
                source={require('../imgs/engenharia-de-producao.jpg')}
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

  botao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
    alignItems: 'center',
  },
  txtTituloImg: {
    fontSize: 18,
    color: 'rgb(12,165,143)',
    fontFamily: 'Bruzh',
    textAlign: 'center',
    marginTop: 20,
  },
  imagem: {
    flex: 1,
    alignItems: 'center',
    // paddingHorizontal: 10,
    marginTop: 10
  },
  formatoImg: {
    borderRadius: 10,
    width: 320,
    height: 250,
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
  }
})



export default EngProducao;      