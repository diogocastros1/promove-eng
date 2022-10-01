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
import Quest6F from '../questoes/quest6F';
import Quest7F from '../questoes/quest7F';
import Quest8F from '../questoes/quest8F';
import Quest5M from '../questoes/quest5M';
import Quest6M from '../questoes/quest6M';
import Quest7M from '../questoes/quest7M';
import Quest8M from '../questoes/quest8M';
import Quest5P from '../questoes/quest5P';
import Quest6P from '../questoes/quest6P';
import Quest7P from '../questoes/quest7P';
import Quest8P from '../questoes/quest8P';


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
          <Quest6F />
          <Quest7F />
          <Quest8F />
          <Quest5M />
          <Quest6M />
          <Quest7M />
          <Quest8M />
          <Quest5P />
          <Quest6P />
          <Quest7P />
          <Quest8P />

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
