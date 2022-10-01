import React, { Component } from 'react'
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity
} from 'react-native'
import { connect } from 'react-redux'

import { removeAgenda } from '../store/actions/agenda'

const initialState = {
  renderBtnAdd: false,
  emailAdm: 'vestibular@inatel.br'
}

class listaAgenda extends Component {
  state = {
    ...initialState
  }

  componentDidMount = () => {
    if (this.props.email === this.state.emailAdm) {
      this.setState({ renderBtnAdd: true })
    }

  }

  render() {
    return (

      <View style={styles.caixaCidades}>
        <View style={styles.espacoCidade}>
          <Text style={styles.txtCaixaCidade}>{this.props.cidadeData}</Text>
        </View>
        {
          this.state.renderBtnAdd &&
          <TouchableOpacity
            style={styles.espacoExcluir}
            onPress={() => this.props.onRemoveAgenda(this.props.id)}
          >
            <Text style={styles.txtExcluir}>X</Text>
          </TouchableOpacity>
        }
      </View>


    )
  }
}

const styles = StyleSheet.create({
  caixaCidades: {
    flex: 1,
    marginBottom: 20,
    flexDirection: 'row',
    paddingVertical: 5,
    borderColor: 'rgb(30,56,96)',
    borderRadius: 5,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgb(12,165,143)'
  },
  txtCaixaCidade: {
    color: '#fff',
    fontSize: 25,
    textAlign: 'center',
    padding: 3,
    fontFamily: 'Bruzh'
  },
  espacoCidade: {
    flex: 10
  },
  espacoExcluir: {
    flex: 1,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
    width: '100%',
    marginRight: 5,
    borderRadius: 5,
  },
  txtExcluir: {
    color: '#fff',
    fontSize: 25,
    fontFamily: 'Bruzh',
  }
})

const mapStateToProps = ({ user, agenda }) => {
  return {
    email: user.email,
    agenda: agenda.agenda,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    onRemoveAgenda: agenda => dispatch(removeAgenda(agenda))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(listaAgenda)

