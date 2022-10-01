import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  TextInput,
  ActivityIndicator
} from 'react-native';
import {Actions} from 'react-native-router-flux';


class CadastroSucesso extends Component {  
  render() {
    return(
      <ScrollView style={styles.tela}>
        <StatusBar 
          backgroundColor='#3D8ED4'
        />
        <View style={styles.tituloTela}>
          <Text style={styles.txtTituloTela}>Cadastre-se</Text>
        </View>

        <View style={styles.body}>
          <View style={styles.mensagem}>
            <Text style={styles.txtMensagem}>Parabéns!!</Text>
            <Text style={styles.txtMensagem}>Seu cadastro foi efetuado com sucesso.</Text>
          </View>

          <View >
            <TouchableHighlight
              onPress={() => {Actions.login()}}
              underlayColor='#68B5EC'
              style={styles.btnSair}
            >
              <Text style={styles.txtBotoes}>Login</Text>
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
  tituloTela: {
    padding: 10,
    borderBottomLeftRadius: 39,
    alignItems: 'center',
    backgroundColor: '#2094E8',
    height: 91,
    justifyContent: 'center',
    flex: 1,
  },
  txtTituloTela: {
    fontSize: 30,
    color: '#fff',
  },

  body: {
    margin: 20,
    alignItems: 'center',
    justifyContent:'center',
    flex: 1,
  },
  mensagem: {
    height: 100,
    width: 300,
    backgroundColor: '#2094E8',
    alignItems: 'center',
    justifyContent: 'center',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 35,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 10,
  },

  txtMensagem: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },

  botoes: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  btnSair: {
    width: 120,
    height: 40,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#2094E8',
    marginTop: 20, 
  },
  txtBotoes: {
    color: '#fff',
    fontSize: 20,
  },
})

export default CadastroSucesso;


