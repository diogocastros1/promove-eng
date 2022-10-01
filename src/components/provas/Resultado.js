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
import { Actions } from 'react-native-router-flux'
import { connect } from 'react-redux'

import { resetaNota } from '../../store/actions/provas'

import GabaritoSimuladoGeral from './GabaritoSimuladoGeral'
import GabaritoSimuladoMatematica from './GabaritoSimuladoMatematica'
import GabaritoSimuladoFisica from './GabaritoSimuladoFisica'
import GabaritoSimuladoPortugues from './GabaritoSimuladoPortugues'

class Resultado extends Component {
  state = {
    simuladoGer: false,
    simuladoMat: false,
    simuladoFis: false,
    simuladoPor: false,
    simulado: this.props.renderSimulado,
    
  }

  componentDidMount = () => {
    console.log('Resultado')
    console.log(this.state.simulado)
    console.log(this.props.gabarito)

    switch (this.state.simulado) {
      case 0:
        return this.setState({ simuladoGer: true })
      case 1:
        return this.setState({ simuladoMat: true })
      case 2:
        return this.setState({ simuladoFis: true })
      case 3:
        return this.setState({ simuladoPor: true })
      default:
        return this.state
    }
  }

  reset = () => {
    this.props.onResetaNota()
    Actions.vestibular()
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
          source={require('../../imgs/bg_simulado.jpg')}
          style={styles.background}
        >
          <ScrollView style={styles.body}>

            <View style={styles.container}>
              <Text style={styles.txtContainer}>Sua nota foi de: </Text>
              <View style={styles.nota}>
                <Text style={styles.txtNota}>{this.props.nota} pts</Text>
              </View>
            </View>
            <View style={{flex:1}}>

              {
                this.state.simuladoGer &&
                <GabaritoSimuladoGeral />
              }
              {
                this.state.simuladoMat &&
                <GabaritoSimuladoMatematica />
              }
              {
                this.state.simuladoFis &&
                <GabaritoSimuladoFisica />
              }
              {
                this.state.simuladoPor &&
                <GabaritoSimuladoPortugues />
              }
            </View>

          </ScrollView>
          <View style={styles.botoes}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { this.reset() }}
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
  background: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 170
  },
  container: {
    backgroundColor: 'rgb(12,165,143)',
    borderColor: 'rgb(30,56,96)',
    borderRadius: 5,
    borderWidth: 1,
    padding: 10
  },
  txtContainer: {
    color: '#fff',
    fontFamily: 'Bruzh',
    fontSize: 50,
    textAlign: 'center'
  },
  nota: {
    backgroundColor: 'rgb(8,34,96)',
    borderRadius: 5,
  },
  txtNota: {
    color: '#fff',
    fontFamily: 'Bruzh',
    fontSize: 80,
    textAlign: 'center'
  },
  questao: {
    justifyContent: 'flex-start'
  },
  txtQuestoes: {
    fontSize: 25,
    color: '#2094E8'
  },
  letras: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'center',
  },
  txtLetras: {
    fontSize: 20,
    color: '#2094E8',
  },
  botoes: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 15,
    alignItems: 'center',
  },
  btnSair: {
    width: 120,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    borderColor: 'rgb(30,56,96)',
    marginBottom: 20,
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

const mapStateToProps = ({ prova }) => {
  return {
    nota: prova.nota,
    renderSimulado: prova.simulado,
    gabarito: prova.gabarito
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onAtualizaNota: (nota) => dispatch(atualizaNota(nota))
    onResetaNota: () => dispatch(resetaNota())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Resultado)

// export default Resultado
