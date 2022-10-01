import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput,
  ScrollView,
  ActivityIndicator,
  ImageBackground,
} from 'react-native';
import { connect } from 'react-redux';
import { Actions } from 'react-native-router-flux';

import { login } from '../store/actions/user'


class Login extends Component {
  state = {
    email: null,
    password: null,
    erroData: '',
    renderErroData: false,
  }

  componentDidUpdate = prevProps => {
    if (prevProps.isLoading && !this.props.isLoading && !this.props.renderErro) {
      Actions.home()
    }
  }

  login = () => {
    this.props.onLogin({ ...this.state })
  }

  renderBtnEntrar() {
    if (this.props.isLoading) {
      return (
        <ActivityIndicator size='large' color='#FFF' />
      )
    }

    return (

      <TouchableHighlight
        onPress={() => { this.checkData() }}
        underlayColor='rgba(12,165,143,0.5)'
        style={styles.btnEntrar}
      >
        <Text style={styles.txtBtnEntrar} >
          Entrar
      </Text>
      </TouchableHighlight>
    )
  }

  checkData = () => {
    if (this.state.email != null && this.state.password != null
      && this.state.password != null && this.state.password.length >= 6) {

      this.login()
      this.setState({ erroData: '', renderErroData: false })

    }
    else if (this.state.email === null) {
      this.setState({ erroData: 'E-mail inválido.', renderErroData: true })
    }
    else if (this.state.password === null || this.state.password.length < 6) {
      this.setState({ erroData: 'Senha inválida.', renderErroData: true })
    }
  }

  render() {
    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(0,0,0, 0.2)'
          translucent
          barStyle='light-content'
        />

        <ImageBackground
          source={require('../imgs/img_background.jpg')}
          style={styles.imgBackground}
        >

          <View style={styles.entradas}>
            <View style={styles.caixaTxtEntradas}>

              <TextInput
                placeholder='E-mail'
                placeholderTextColor='#999'
                style={styles.txtEntradas}
                value={this.state.email}
                keyboardType='email-address'
                onChangeText={(email) => { this.setState({ email }) }}
              />
            </View>

            <View style={styles.caixaTxtEntradas}>
              <TextInput
                placeholder='Senha'
                placeholderTextColor='#999'
                secureTextEntry
                style={styles.txtEntradas}
                value={this.state.senha}
                onChangeText={(password) => { this.setState({ password }) }}
              />
            </View>
            {
              this.props.renderErro &&
              <Text style={styles.error}>{this.props.erroLogin}</Text>
            }
            {
              this.state.renderErroData &&
              <Text style={styles.error}>{this.state.erroData}</Text>
            }
          </View>

          <View style={styles.botoes}>
            <View>
              {this.renderBtnEntrar()}
            </View>
            <View>
              <TouchableHighlight
                onPress={() => { Actions.cadastro() }}
                underlayColor='rgba(255,255,255, 0.1)'
                style={{ borderRadius: 20, padding: 5 }}
              >
                <Text style={styles.btnCadastrar}>
                  Ainda não tem cadastro? Cadastre-se
              </Text>
              </TouchableHighlight>
            </View>
          </View>
          <View style={styles.rodape}>
            <Text style={{ color: '#fff' }}>Inatel - Todos os direitos reservados.</Text>
          </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: '#2094E8',
  },
  imgBackground: {
    width: '100%',
    height: '100%'
  },
  txtTopo: {
    color: '#fff',
    fontSize: 40,
    textAlign: 'center',
  },
  entradas: {
    flex: 2,
    padding: 10,
    marginTop: 10,
    justifyContent: 'flex-end',
    paddingVertical: 30,

  },
  icon: {
    color: '#000',
    marginLeft: 10
  },
  caixaTxtEntradas: {
    borderColor: '#999',
    borderWidth: 0.5,
    borderRadius: 5,
    height: 45,
    marginVertical: 10,
    flexDirection: 'row',
    backgroundColor: '#fff'
  },
  txtEntradas: {
    fontSize: 20,
    paddingLeft: 20,
    width: '100%'
  },
  error: {
    fontSize: 20,
    color: '#ff0000',
    paddingLeft: 10,
  },
  botoes: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    height: 150,
  },
  btnEntrar: {
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
  txtBtnEntrar: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
  btnCadastrar: {
    color: '#fff',
    fontSize: 20,
  },
  rodape: {
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginBottom: 10,
  },

})

const mapStateToProps = ({ user }) => {
  return {
    isLoading: user.isLoading,
    loadingLogin: user.loadingLogin,
    erroLogin: user.erroLogin,
    renderErro: user.renderErro,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogin: user => dispatch(login(user))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
