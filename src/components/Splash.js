import React, { Component } from 'react';
import {
  StyleSheet,
  View,
  StatusBar,
  Image,
  ImageBackground
} from 'react-native';

import { Actions } from 'react-native-router-flux';

import { login } from '../store/actions/user'


class Splash extends Component {
  componentDidMount = () => {
    setTimeout(
      () => {Actions.login()}, 2000
    )
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
            source={require('../imgs/bg_splash.jpg')}
            style={styles.logo}
          />
          {/* <Image
            source={require('../imgs/logo_promove_para_fundo_azul.png')}
            style={styles.logo}
          />         */}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
    backgroundColor: 'rgb(31,57,94)',
    justifyContent: 'center'
  },
  logo: {
    // resizeMode:'contain',
//    padding: 20,
    // width: '100%'
    flex: 1
  }

})

// const mapStateToProps = ({ user }) => {
//   return {
//     isLoading: user.isLoading,
//     loadingLogin: user.loadingLogin,
//     erroLogin: user.erroLogin,
//     renderErro: user.renderErro,
//   }
// }

// const mapDispatchToProps = dispatch => {
//   return {
//     onLogin: user => dispatch(login(user))
//   }
// }

// export default connect(mapStateToProps, mapDispatchToProps)(Login)


export default Splash