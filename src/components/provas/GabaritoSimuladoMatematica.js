import React, { Component } from 'react';
import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableHighlight,
  ImageBackground
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux'

import Prova1 from './matematica/Prova1';
import Prova2 from './matematica/Prova2';
import Prova3 from './matematica/Prova3';
import Prova4 from './matematica/Prova4';
import Prova5 from './matematica/Prova5';
import Prova6 from './matematica/Prova6';

class GabaritoSimuladoMatematica extends Component {
  state = {
    prova: this.props.prova,
    prova1: false,
    prova2: false,
    prova3: false,
    prova4: false,
    prova5: false,
    prova6: false,
  }

  componentDidMount = () => {
    console.log('Gabarito')
    console.log(this.state.prova)
    
    switch (this.state.prova) {
      case 0:
        return this.setState({ prova1: true })
      case 1:
        return this.setState({ prova2: true })
      case 2:
        return this.setState({ prova3: true })
      case 3:
        return this.setState({ prova4: true })
      case 4:
        return this.setState({ prova5: true })
      case 5:
        return this.setState({ prova6: true })
      default:
        return this.state
    }
  }

  render() {
    return (
      <View style={styles.tela}>
        <ScrollView style={styles.body}>

          {
            this.state.prova1 &&
            <Prova1 />
          }
          {
            this.state.prova2 &&
            <Prova2 />
          }
          {
            this.state.prova3 &&
            <Prova3 />
          }
          {
            this.state.prova4 &&
            <Prova4 />
          }
          {
            this.state.prova5 &&
            <Prova5 />
          }
          {
            this.state.prova6 &&
            <Prova6 />
          }

        </ScrollView>
      </View >
    )
  }
}

const styles = StyleSheet.create({
  tela: {
    flex: 1,
  },
  background: {
    flex: 1,
  },
  body: {
    paddingHorizontal: 20,
    marginTop: 160,
    backgroundColor: 'rgba(255,255,255,0.8)'
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
  },
  txtBtnSair: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh'
  },
})

const mapStateToProps = ({ prova }) => {
  return {
    prova: prova.prova,
    
  }
}

export default connect(mapStateToProps, null)(GabaritoSimuladoMatematica)
