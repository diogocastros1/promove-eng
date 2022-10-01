import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableHighlight,
  ProgressViewIOSBase,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { atualizaNota } from '../../../store/actions/provas'

import Quest5F from '../questoes/quest5F';
import Quest7F from '../questoes/quest7F';
import Quest9F from '../questoes/quest9F';
import Quest11F from '../questoes/quest11F';
import Quest5M from '../questoes/quest5M';
import Quest7M from '../questoes/quest7M';
import Quest9M from '../questoes/quest9M';
import Quest11M from '../questoes/quest11M';
import Quest1P from '../questoes/quest1P';
import Quest3P from '../questoes/quest2P';
import Quest5P from '../questoes/quest3P';
import Quest7P from '../questoes/quest4P';


const initialState = {
  nota: 0,
}

class Prova1 extends Component {

  state = {
    ...initialState
  }

  enviandoNota = () => {
    // this.props.onAtualizaNota(this.state.nota)
    Actions.resultado()
  }

  render() {
    return (
      <ScrollView style={styles.tela}>
        <View style={styles.body}>
          
          <Quest5F />       
          <Quest7F />       
          <Quest9F />       
          <Quest11F />       
          <Quest5M />       
          <Quest7M />       
          <Quest9M />       
          <Quest11M />       
          <Quest1P />
          <Quest3P />
          <Quest5P />
          <Quest7P />

          <View style={styles.botoes}>
            <TouchableHighlight
              style={styles.btnSair}
              onPress={() => { this.enviandoNota() }}
              underlayColor='rgba(12,165,143,0.8)'
            >
              <Text style={styles.txtBtnSair}>Enviar</Text>
            </TouchableHighlight>
          </View>
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  body: {
    // borderWidth: 1
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
    marginBottom: 20,
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

const mapDispatchToProps = (dispatch) => {
  return {
    onAtualizaNota: (nota) => dispatch(atualizaNota(nota))
  }
}

export default connect(null, mapDispatchToProps)(Prova1)

// export default Prova1
