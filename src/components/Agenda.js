import React, { Component } from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  TouchableHighlight,
  View,
  FlatList,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import ListaAgenda from './ListaAgenda'
import { getPost } from '../store/actions/agenda'

const initialState = {
  renderBtnAdd: false,
  emailAdm: 'vestibular@inatel.br'
}

class Agenda extends Component {

  state = {
    ...initialState
  }

  componentDidMount = () => {
    if (this.props.email === this.state.emailAdm) {
      this.setState({ renderBtnAdd: true })
    }
    this.props.onGetAgenda()
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
          <View style={styles.body}>
            <FlatList
              data={this.props.agenda}
              keyExtractor={item => `${item.id}`}
              renderItem={({ item }) =>
                <ListaAgenda key={item.id} {...item} />
              }
              style={{ width: '100%' }}
            />

            {
              this.state.renderBtnAdd &&
              <View style={styles.cxEntradas}>
                <TouchableHighlight
                  onPress={() => { Actions.addAgenda() }}
                  style={styles.botaoAdd}
                  underlayColor='rgba(12,165,143,0.8)'
                >
                  <Text style={styles.txtBtnAdd}>+</Text>
                </TouchableHighlight>
              </View>
            }
            <View style={styles.btnSairAlign}>

              <View style={styles.btnSair}>
                <TouchableHighlight
                  onPress={() => { Actions.home() }}
                  underlayColor='rgba(12,165,143,0.8)'
                >
                  <Text style={styles.txtBtnSair}>Voltar</Text>
                </TouchableHighlight>
              </View>
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
    width: '100%',
    paddingTop: 160
  },
  body: {
    flex: 1,
    margin: 15,
    alignItems: 'center',
  },
  btnSairAlign: {
    alignItems: 'center'
  },
  cxEntradas: {
    width: '100%'
  },
  botaoAdd: {
    width: '100%',
    height: 40,
    backgroundColor: 'rgb(12,165,143)',
    borderColor: 'rgb(30,56,96)',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  txtBtnAdd: {
    color: '#fff',
    fontSize: 60,
    textAlign: 'center',
    textAlignVertical: 'center',
    paddingBottom: 5,
    fontFamily: 'Bruzh'
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

const mapStateToProps = ({ user, agenda }) => {
  return {
    email: user.email,
    agenda: agenda.agenda
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onGetAgenda: () => dispatch(getPost())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Agenda)
