import React, { Component } from 'react'
import { connect } from 'react-redux'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
  ImageBackground
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { Actions } from 'react-native-router-flux'

import { logout } from '../store/actions/user'

class Perfil extends Component {
  logout = () => {
    this.props.onLogout()
  }

  render() {
    const options = { email: this.props.email, secure: true }

    return (
      <View style={styles.tela}>
        <StatusBar
          backgroundColor='rgba(255,255,255, 0.3)'
          translucent
          barStyle='dark-content'
        />
        <ImageBackground
          source={require('../imgs/bg_perfil.jpg')}
          style={styles.background}
        >
          <View style={styles.container}>

            <Gravatar
              options={options}
              style={styles.avatar}
            />
            <Text style={styles.nickname}>{this.props.name}</Text>
            <Text style={styles.email}>{this.props.email}</Text>
          </View>
          <View style={styles.containerBtn}>
            <TouchableOpacity
              onPress={this.logout}
              style={styles.btnLogout}
            >
              <Text style={styles.txtBtnLogout}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => Actions.home()}
              style={styles.btnLogout}
            >
              <Text style={styles.txtBtnLogout}>Voltar</Text>
            </TouchableOpacity>
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
  container: {
    flex: 1,
    alignItems: 'center'
  },
  background: {
    flex: 1,
    paddingTop: 180
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  nickname: {
    marginTop: 30,
    fontSize: 30,
    fontWeight: 'bold',
  },
  email: {
    marginTop: 10,
    fontSize: 25,
  },
  containerBtn: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    alignItems: 'center',
    marginVertical: 20,   
  },
  btnLogout: {
    width: 120,
    height: 40,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)',
    marginTop: 30,
  },
  txtBtnLogout: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

const mapStateToProps = ({ user }) => {
  return {
    email: user.email,
    name: user.name,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onLogout: () => dispatch(logout())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Perfil)
