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
  ImageBackground,
} from 'react-native';
import { WebView } from 'react-native-webview'
import { Actions } from 'react-native-router-flux'

class EventosSrs extends Component {

  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_eventos.jpg')}
          style={styles.backgound}
        >

          <View style={styles.body} >
            <ScrollView >
              <View style={styles.eventos}>
                <View style={{ borderRadius: 100 }}>
                  <Image
                    style={styles.logo}
                    source={require('../imgs/hackTown.png')}
                  />

                </View>

                {/* <Text style={styles.txtSaibaMais} >
                  Clique na imagem abaixo para saber mais.
                </Text>

                <TouchableHighlight
                  onPress={() => { Linking.openURL('https://www.youtube.com/watch?v=_4ekZwTR__c') }}
                  underlayColor='#68B5EC'
                  style={{ paddingBottom: 50 }}
                >
                  <Image
                    style={styles.hackTown}
                    source={require('../imgs/hackTownSite.png')}
                  />
                </TouchableHighlight> */}
                <View style={styles.containerMovie}>

                  <WebView
                    style={styles.movie}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/_4ekZwTR__c" }}
                  />

                </View>
              </View>

              <View style={styles.eventos}>
                <Image
                  source={require('../imgs/logo-urso-2020.png')}
                />
                {/* 
                <Text style={styles.txtDescricao} >
                  Nascido da reunião de um grupo de amigos realizada em 1998, a Turma do Urso
                  foi ganhando cada vez mais adeptos e se popularizou até se tornar o maior Carnaval de Minas Gerais.
                  Com 21 anos de história, o Bloco do Urso se tornou um destino indispensável no Carnaval.'
                </Text> */}

                <View style={styles.containerMovie}>

                  <WebView
                    style={styles.movie}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    source={{ uri: "https://www.youtube.com/embed/WbozgWRYC_c" }}
                  />

                </View>
              </View>

              <View style={styles.eventos}>
                <Image
                  style={styles.cidadeCriativa}
                  source={require('../imgs/cidade-feliz.png')}
                />
                <Text style={styles.txtDescricao} >
                  Uma rede colaborativa que une voluntários, instituições públicas e iniciativa privada.
                  Em prol do desenvolvimento da economia criativa e da qualidade de vida em Santa Rita do Sapucaí, MG.
            </Text>

                <TouchableHighlight
                  onPress={() => { Linking.openURL('http://cidadecriativacidadefeliz.com.br/') }}
                  underlayColor='#68B5EC'
                  style={{ paddingBottom: 50 }}
                >
                  <Text style={styles.txtSaibaMais} >
                    Clique aqui para saber mais.
                  </Text>
                </TouchableHighlight>
              </View>
            </ScrollView>
          </View>
          <View style={styles.botao}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.ondeFica() }}
              underlayColor='#68B5EC'
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
  backgound: {
    flex: 1,
  },
  body: {
    flex: 8,
    margin: 20,
    marginTop: 160,

  },
  eventos: {
    alignItems: 'center',
    justifyContent: 'space-around',
    marginBottom: 30,
    borderBottomColor: 'rgb(12,165,143)',
    borderBottomWidth: 10,
  },
  logo: {
    height: 100,
    width: 160,
  },
  txtTitulo: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'rgb(12,165,143)',
    textAlign: 'center'
  },

  txtDescricao: {
    fontSize: 16,
    color: 'rgb(12,165,143)',
    textAlign: 'center',
    paddingBottom: 10,
  },
  txtSaibaMais: {
    fontSize: 16,
    color: 'rgb(12,165,143)',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
  },

  txtSaibaMaisUltimo: {
    fontSize: 16,
    color: 'rgb(12,165,143)',
    textAlign: 'center',
    fontWeight: 'bold',
    margin: 10,
    paddingBottom: 50,
  },

  hackTown: {
    borderRadius: 10,
    width: 320,
    height: 395,
  },

  blocoDoUrso: {
    borderRadius: 10,
    width: 320,
    height: 210,
  },

  cidadeCriativa: {
    borderRadius: 10,
    width: 320,
    height: 100,
  },

  botao: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    flex: 1
  },
  containerMovie: {
    flex: 1,
  },
  movie: {
    marginVertical: 20,
    width: 320,
    height: 230,
  },
  btnSairAlign: {
    alignItems: 'center'
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
    marginBottom: 20,
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})



export default EventosSrs;      