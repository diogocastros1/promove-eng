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
          source={require('../imgs/bg_onde_fica.jpg')}
          style={styles.background}
        >
          <View style={styles.body} >
            <ScrollView >

              <View style={styles.caixas}>
                <View style={styles.caixaCidade}>
                  <Text style={styles.tituloCidade}>Santa Rita do Sapucaí</Text>
                  <Text style={styles.txtCidade}>Vale da Eletrônica
                  Conhecida como Vale da Eletrônica, a cidade conta com mais de 130 pequenas e médias
                  empresas nas áreas de eletrônica, automação industrial, telecomunicações, software,
                  eletro-medicina, entre outras no ramo da engenharia.Graças à diversidade de suas empresas,
                  à cadeia produtiva que elas formam entre si e ao tripé governo-iniciativa privada-academia,
                  a cidade tornou-se sede do APL Eletroeletrônico Sulmineiro (Arranjo Produtivo Local).
                  Estas empresas oferecem produtos e serviços a todo Brasil e disponibilizam oportunidades de
                  estágio e emprego, sendo um grande pólo tecnológico empregador aos estudantes e engenheiros
                  formados pelo Inatel.  Com uma localização geográfica privilegiada - em uma das regiões
                  que mais se desenvolve no país, Santa Rita do Sapucaí está localizada entre os 3
                  maiores centros econômicos e comerciais do Brasil (São Paulo, Rio de Janeiro e Belo Horizonte).
                </Text>
                </View>
              </View>

              <View style={styles.caixas}>
                <TouchableHighlight
                  onPress={() => { Actions.eventosSrs() }}
                  style={styles.caixaBtn}
                  underlayColor='#68B5EC'
                >
                  <View>
                    <Text style={styles.tituloBtn}>Eventos</Text>
                    <Text style={styles.descricaoBtn}>veja os principais eventos da cidade.</Text>
                  </View>
                </TouchableHighlight>
              </View>
              
            </ScrollView>
            <View style={styles.btnSairAlign}>
              <TouchableHighlight
                style={styles.btnSair}
                onPress={() => { Actions.inatel() }}
                underlayColor='#68B5EC'
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
    flex: 2,
    marginTop: 160,
  },
  caixas: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    margin: 15,

  },
  caixaCidade: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    backgroundColor: 'rgb(12,165,143)',
    padding: 10,
  },
  tituloCidade: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Bruzh',
  },
  txtCidade: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
  },
  caixaBtn: {
    backgroundColor: '#2094E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    backgroundColor: 'rgb(12,165,143)',
    flex: 1,
    padding: 10,
  },
  tituloBtn: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    fontFamily: 'Bruzh',
  },
  descricaoBtn: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
    padding: 5,
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



export default Inatel;