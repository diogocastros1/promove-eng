import React, { Component } from 'react';
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput,
  ActivityIndicator,
  ScrollView
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { createUser } from '../store/actions/user'


class Cadastro extends Component {

  state = {
    name: null,
    email: null,
    password: null,
    confirmPassword: null,
    colegio: null,
    celular: null,
    erroPassword: false,
    erroData: '',
  }

  componentDidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading) {
      this.setState({
        name: null,
        email: null,
        password: null,
        confirmPassword: null,
        colegio: null,
        celular: null,
        erroPassword: false,
        erroData: '',
      })
      Actions.home()
    }
  }

  renderBtnSalvar() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator size='large' color='rgb(31,57,94)' />
      )
    }

    return (
      <View style={styles.botoes}>
        <TouchableHighlight
          onPress={() => this.checkData()}
          underlayColor='#68B5EC'
          style={styles.btnSalvarSair}
        >
          <Text style={styles.txtBotoes}>SALVAR</Text>
        </TouchableHighlight>

      
        <TouchableHighlight
          onPress={() => { Actions.login() }}
          underlayColor='#68B5EC'
          style={styles.btnSalvarSair}
        >
          <Text style={styles.txtBotoes}>SAIR</Text>
        </TouchableHighlight>
      </View>
    )
  }

  checkData = () => {

    if (this.state.password === this.state.confirmPassword && this.state.password !== null && this.state.colegio !== null &&
      this.state.name !== null && this.state.celular !== null && this.state.email !== null) {
      this.props.onCreateUser(this.state)
      this.setState({ erroData: '' })
    }
    else if (this.state.colegio === null) {
      this.setState({ erroPassword: true, erroData: 'Colégio é um campo origatório.' })
    }
    else if (this.state.name === null) {
      this.setState({ erroPassword: true, erroData: 'Nome é um campo origatório.' })
    }
    else if (this.state.celular === null) {
      this.setState({ erroPassword: true, erroData: 'Celular é um campo origatório.' })
    }
    else if (this.state.email === null) {
      this.setState({ erroPassword: true, erroData: 'E-mail é um campo origatório.' })
    }
    else if (this.state.password === null) {
      this.setState({ erroPassword: true, erroData: 'A senha tem que ter ao menos 6 digítos' })
    }
    else if (this.state.password !== this.state.confirmPassword) {
      this.setState({ erroPassword: true, erroData: 'Senha diferente de Confirmação de senha.' })
    }

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
          source={require('../imgs/bg_cadastro.jpg')}
          style={styles.imgBg}
        >

          <ScrollView style={styles.entradas}>
            <View style={styles.caixaTxtEntradas}>
              <TextInput
                placeholder='Colégio/Escola'
                placeholderTextColor='#999'
                style={styles.txtEntradas}
                value={this.props.colegio} //value transforma a caixa de texto em um ambiente controlado
                onChangeText={(colegio) => { this.setState({ colegio, erroPassword: false }) }}
                returnKeyType='next'
              />
            </View>

            <View style={styles.caixaTxtEntradas}>
              <TextInput
                placeholder='Nome/Apelido'
                placeholderTextColor='#999'
                style={styles.txtEntradas}
                value={this.props.nome}
                onChangeText={(name) => { this.setState({ name, erroPassword: false }) }}
                returnKeyType='next'

              />
            </View>

            <View style={styles.caixaTxtEntradas}>
              <TextInput
                placeholder='Celular com DDD'
                placeholderTextColor='#999'
                style={styles.txtEntradas}
                value={this.props.numero}
                onChangeText={(celular) => { this.setState({ celular, erroPassword: false }) }}
                returnKeyType='next'

              />
            </View>

            <View style={styles.caixaTxtEntradas}>
              <TextInput
                placeholder='E-mail'
                placeholderTextColor='#999'
                style={styles.txtEntradas}
                value={this.props.email}
                onChangeText={(email) => { this.setState({ email, erroPassword: false }) }}

              />
            </View>

            <View style={styles.caixaTxtEntradas}>
              <TextInput
                placeholder='Senha'
                placeholderTextColor='#999'
                secureTextEntry
                style={styles.txtEntradas}
                value={this.props.password}
                onChangeText={(password) => { this.setState({ password, erroPassword: false }) }}
                secureTextEntry

              />
            </View>
            <View style={styles.caixaTxtEntradas}>
              <TextInput
                placeholder='Confirme sua senha'
                placeholderTextColor='#999'
                secureTextEntry
                style={styles.txtEntradas}
                value={this.props.confirmPassword}
                onChangeText={(confirmPassword) => { this.setState({ confirmPassword, erroPassword: false }) }}
                secureTextEntry

              />
            </View>
            {
              this.props.renderErro &&
              <View style={styles.containerErro}>
                <Text style={styles.error}>{this.props.erroCadastro}</Text>
              </View>
            }
            {
              this.state.erroPassword &&
              <View style={styles.containerErro}>
                <Text style={styles.error}>{this.state.erroData}</Text>
              </View>
            }
          </ScrollView>
          <View style={{marginBottom: 10}}>
            {this.renderBtnSalvar()}
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
  imgBg: {
    flex: 1,
  },
  entradas: {
    flex: 2,
    padding: 10,
    marginTop: 140,
    height: 375,
  },
  caixaTxtEntradas: {
    borderColor: '#999',
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
    backgroundColor: '#fff',
    marginTop: 20,
    justifyContent: 'center'
  },
  txtEntradas: {
    fontSize: 20,
    paddingLeft: 20,
    width: '100%'
  },
  containerErro: {
    backgroundColor: 'rgba(255,255,255,0.7)',
    padding: 10
  },
  error: {
    fontSize: 20,
    color: '#ff0000',
    paddingLeft: 10,
    textAlign: 'center'
  },
  botoes: {
    
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnSalvarSair: {
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
  txtBotoes: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'

  },
})

const mapStateToProps = ({ user }) => {
  return {
    erroCadastro: user.erroCadastro,
    renderErro: user.renderErro,
    isLoading: user.isLoading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateUser: (user) => dispatch(createUser(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Cadastro)


