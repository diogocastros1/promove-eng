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

import { atualizaNota, resultadoProva, selecaoProva } from '../../../store/actions/provas'

import Quest1M from '../questoes/quest1M';
import Quest2M from '../questoes/quest2M';
import Quest3M from '../questoes/quest3M';
import Quest4M from '../questoes/quest4M';
import Quest5M from '../questoes/quest5M';
import Quest6M from '../questoes/quest6M';
import Quest7M from '../questoes/quest7M';
import Quest8M from '../questoes/quest8M';
import Quest9M from '../questoes/quest9M';
import Quest10M from '../questoes/quest10M';
import Quest11M from '../questoes/quest11M';
import Quest12M from '../questoes/quest12M';


const initialState = {
  nota: 0,
}

class Prova1 extends Component {

  state = {
    ...initialState
  }

  enviandoNota = () => {
    this.props.onResultadoProva()
    Actions.resultado()
  }

  render() {
    return (
      <ScrollView style={styles.tela}>
        <View style={styles.body}>
          
          <Quest11M />
          <Quest9M />
          <Quest7M />
          <Quest5M />
          <Quest3M />
          <Quest1M />
          <Quest12M />
          <Quest10M />
          <Quest8M />
          <Quest6M />
          <Quest4M />
          <Quest2M />

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
    onAtualizaNota: (nota) => dispatch(atualizaNota(nota)),
    onResultadoProva: () => dispatch(resultadoProva()),
    onSelecaoProva: (prova) => dispatch(selecaoProva(prova))
  }
}


export default connect(null, mapDispatchToProps)(Prova1)

// export default Prova1
