import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  TextInput,
  ImageBackground,
  ScrollView
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import { addAgenda } from '../store/actions/agenda'

class AddAgenda extends Component {
  state = {
    id: '',
    cidadeData: '',
  }

  save = async () => {
    this.props.onAddAgenda({
      id: '',
      cidadeData: this.state.cidadeData,

    })
    this.setState({ cidadeData: '' })
    Actions.agenda()
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
          source={require('../imgs/bg_agenda.jpg')}
          style={styles.background}
        >
          <ScrollView style={styles.body}>
            <View style={styles.container}>
              <Text style={styles.txtCidade}>Entre com o nome da cidade e a data:</Text>
              <View style={styles.containerInput}>
                <TextInput
                  placeholder={'Digite aqui...'}
                  onChangeText={cidadeData => this.setState({ cidadeData })}
                  value={this.state.cidadeData}
                  style={styles.txtCidade}
                  placeholderTextColor={'#fff'}
                />
              </View>
            </View>
            <View style={styles.containerBtn}>
              <View >
                <TouchableHighlight
                  style={styles.btnSalvar}
                  onPress={() => this.save()}
                  underlayColor='rgba(12,165,143,0.8)'
                >
                  <Text style={styles.txtBtnSalvar}>Salvar</Text>
                </TouchableHighlight>
              </View>

            </View>
          </ScrollView>
          <View style={styles.containerBtnVoltar}>
            <TouchableHighlight
              style={styles.btnSalvar}
              onPress={() => { Actions.agenda() }}
              underlayColor='rgba(12,165,143,0.8)'
            >
              <Text style={styles.txtBtnSalvar}>Voltar</Text>
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
    width: '100%',
    paddingTop: 160
  },
  body: {
    flex: 1
  },
  container: {
    borderRadius: 5,
    backgroundColor: 'rgb(12,165,143)',
    margin: 20,
    padding: 10,
    alignItems: 'center'
  },
  txtCidade: {
    fontSize: 25,
    color: '#fff',
    paddingBottom: 10,
    fontFamily: 'Bruzh',
    width: '100%'
  },
  containerInput: {
    width: '90%',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor: 'rgba(23, 219, 255, 0.2)'
  },
  containerBtn: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
  containerBtnVoltar: {
    alignItems: 'center',
    justifyContent: 'center',
    margin: 20
  },
  btnSalvar: {
    width: 120,
    height: 40,
    borderRadius: 5,
    borderColor: 'rgb(30,56,96)',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
  },
  txtBtnSalvar: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

const mapDispatchToProps = dispatch => {
  return {
    onAddAgenda: agenda => dispatch(addAgenda(agenda))
  }
}

export default connect(null, mapDispatchToProps)(AddAgenda) 
