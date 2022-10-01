import React, { Component } from 'react';
import {
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  Image
} from 'react-native';
import { connect } from 'react-redux'
import CheckBox from '@react-native-community/checkbox'

import { somaNota, subtraiNota } from '../../../store/actions/provas'

const initialState = {
  letraA: false,
  letraB: false,
  letraC: false,
  letraD: false,
  letraE: false,
  selecaoOffA: false,
  selecaoOffB: false,
  selecaoOffC: false,
  selecaoOffD: false,
  selecaoOffE: false,
  nota: 0,
}

//Questão nº 17 de matematica prova julho/2018

class Quest12M extends Component {
  state = {
    ...initialState,
  }

  componentDidUpdate = () => {
    if (this.props.nota != this.state.nota)
      this.setState({ nota: this.props.nota })
  }


  escolhaLetraA = (valorA) => {
    let estado = valorA;

    this.setState({ letraA: estado })

    if (valorA == true) {
      this.setState({ selecaoOffB: true, selecaoOffC: true, selecaoOffD: true, selecaoOffE: true });
      this.props.onSomaNota(this.state.nota)
    }
    else {
      this.setState({ selecaoOffB: false, selecaoOffC: false, selecaoOffD: false, selecaoOffE: false });
      this.props.onSubtraiNota(this.state.nota)
    }
    // this.props.onAtualizaNota(this.state.nota)
    // console.log(this.props.nota)
  }

  escolhaletraB = (valorB) => {
    let estado = valorB;

    this.setState({ letraB: estado })

    if (valorB == true) {
      this.setState({ selecaoOffA: true, selecaoOffC: true, selecaoOffD: true, selecaoOffE: true })

    }
    else {
      this.setState({ selecaoOffA: false, selecaoOffC: false, selecaoOffD: false, selecaoOffE: false })

    }
  }

  escolhaLetraC = (valorC) => {
    let estado = valorC;

    this.setState({ letraC: estado })

    if (valorC == true) {
      this.setState({ selecaoOffA: true, selecaoOffB: true, selecaoOffD: true, selecaoOffE: true })

    }
    else {
      this.setState({ selecaoOffA: false, selecaoOffB: false, selecaoOffD: false, selecaoOffE: false })

    }
  }

  escolhaLetraD = (valorD) => {
    let estado = valorD;

    this.setState({ letraD: estado })

    if (valorD == true) {
      this.setState({ selecaoOffA: true, selecaoOffB: true, selecaoOffC: true, selecaoOffE: true })
      
    }
    else {
      this.setState({ selecaoOffA: false, selecaoOffB: false, selecaoOffC: false, selecaoOffE: false })
      
    }

  }
  escolhaLetraE = (valorE) => {
    let estado = valorE;

    this.setState({ letraE: estado })

    if (valorE == true) {
      this.setState({ selecaoOffA: true, selecaoOffB: true, selecaoOffC: true, selecaoOffD: true })

    }
    else {
      this.setState({ selecaoOffA: false, selecaoOffB: false, selecaoOffC: false, selecaoOffD: false })

    }

  }

  render() {
    return (
      <ScrollView style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <View style={styles.tituloQuest}>
          {/* <Text style={styles.txtTituloQuest}>Quest12M</Text> */}
        </View>
        <View style={styles.body}>
          <View style={styles.questao}>
            <Text style={styles.txtQuestoes}>
              Na figura a seguir, o segmento CE mede 12 cm, o segmento AC mede
              8 cm e o segmento DF mede 4 cm. A medida, em cm, do segmento AF é
              dada por:
            </Text>
            <Image
              source={require('../../../imgs/img_quest12M.png')}
              style={{ width: '100%', paddingVertical: 5, resizeMode: 'contain' }}
            />
            <View style={styles.letras}>
              <CheckBox
                onValueChange={(valorA) => { this.escolhaLetraA(valorA) }}
                value={this.state.letraA}
                disabled={this.state.selecaoOffA}
              //onChange={() => this.props.atualizaPontos(this.state.pontos)}
              />
              <Text style={styles.txtLetras}>2√13</Text>
            </View>
            <View style={styles.letras}>
              <CheckBox
                onValueChange={(valorB) => { this.escolhaletraB(valorB) }}
                value={this.state.letraB}
                disabled={this.state.selecaoOffB}
              />
              <Text style={styles.txtLetras}>10</Text>
            </View>
            <View style={styles.letras}>
              <CheckBox
                onValueChange={(valorC) => { this.escolhaLetraC(valorC) }}
                value={this.state.letraC}
                disabled={this.state.selecaoOffC}
              />
              <Text style={styles.txtLetras}>2√26</Text>
            </View>
            <View style={styles.letras}>
              <CheckBox
                onValueChange={(valorD) => { this.escolhaLetraD(valorD) }}
                value={this.state.letraD}
                disabled={this.state.selecaoOffD}
              />
              <Text style={styles.txtLetras}>12</Text>
            </View>
            <View style={styles.letras}>
              <CheckBox
                onValueChange={(valorE) => { this.escolhaLetraE(valorE) }}
                value={this.state.letraE}
                disabled={this.state.selecaoOffE}
              />
              <Text style={styles.txtLetras}>NRA</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    marginBottom: 10
  },
  tituloQuest: {
    borderRadius: 5,
    // alignItems: 'center',
    // backgroundColor: 'rgb(12,165,143)',
    // justifyContent: 'center',
    borderWidth: 5,
    borderColor: 'rgb(12,165,143)',
  },
  txtTituloQuest: {
    fontSize: 30,
    color: '#fff',
    fontFamily: 'Bruzh',
    padding: 5
  },
  body: {
    padding: 5,
  },
  questao: {
    justifyContent: 'flex-start',
  },
  txtQuestoes: {
    fontSize: 25,
    color: 'rgb(12,165,143)',
    paddingBottom: 10,
    textAlign: 'center'
  },
  letras: {
    flexDirection: 'row',
    marginLeft: 15,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    padding: 10,
    marginRight: 15
  },
  txtLetras: {
    fontSize: 20,
    color: 'rgb(12,165,143)',
  }
})

const mapStateToProps = ({ prova }) => {
  return {
    nota: prova.nota,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    // onAtualizaNota: (nota) => dispatch(atualizaNota(nota))
    onSomaNota: (nota) => dispatch(somaNota(nota)),
    onSubtraiNota: (nota) => dispatch(subtraiNota(nota))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Quest12M)

// export default Ques13