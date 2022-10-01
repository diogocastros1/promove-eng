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

import { connect } from 'react-redux'
import { selecaoProva } from '../store/actions/provas';

class SelecaoSimulado extends Component {

  componentDidMount = () => {
    let numero
    numero = Math.floor(Math.random() * Math.floor(6))
    this.props.onSelecaoProva(numero)
    console.log(numero)
  }

  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_simulado.jpg')}
          style={styles.background}
        >
          <View style={styles.body}>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { Actions.simuladoGeral() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Geral</Text>
                  {/* <Text style={styles.descricaoBtn}>venha fazer parte da nossa família.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { Actions.simuladoMatematica() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Matemática</Text>
                  {/* <Text style={styles.descricaoBtn}>venha fazer parte da nossa família.</Text> */}
                </View>
              </TouchableHighlight>
            </View>
            <View style={styles.botoes}>
              <TouchableHighlight
                onPress={() => { Actions.simuladoFisica() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Física</Text>
                  {/* <Text style={styles.descricaoBtn}>venha fazer parte da nossa família.</Text> */}
                </View>
              </TouchableHighlight>

              <TouchableHighlight
                onPress={() => { Actions.simuladoPortugues() }}
                style={styles.caixaBtn}
                underlayColor='rgba(12,165,143,0.8)'
              >
                <View>
                  <Text style={styles.tituloBtn}>Linguas</Text>
                  {/* <Text style={styles.descricaoBtn}>venha fazer parte da nossa família.</Text> */}
                </View>
              </TouchableHighlight>
            </View>

          </View>
          <View style={styles.botoes}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { Actions.vestibular() }}
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
    flex: 1,
    //justifyContent: 'center',
    marginTop: 150,
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 20,
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
    margin: 10
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

const mapDispatchToProps = dispatch => {
  return {
    onSelecaoProva: (prova) => dispatch(selecaoProva(prova))
  }
}

export default connect(null, mapDispatchToProps)(SelecaoSimulado)


// export default SelecaoSimulado;
