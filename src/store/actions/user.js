import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_LOADED,
  LOADING_USER,
  ERRO_CADASTRO,
  ERRO_LOGIN
} from './actionTypes'
import axios from 'axios'

const authBaseURL = 'https://www.googleapis.com/identitytoolkit/v3/relyingparty'
const API_KEY = 'AIzaSyDZxgN6aZe1E_LSvG39Sm4YZtyT7JHyjno'

export const userLogged = user => {
  return {
    type: USER_LOGGED_IN,
    payload: user,
  }
}

export const logout = () => {
  return {
    type: USER_LOGGED_OUT,
  }
}

export const createUser = (user) => {
  return dispatch => {
    dispatch(loadingUser())
    axios.post(`${authBaseURL}/signupNewUser?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(err => {
        console.log(err),
          dispatch({ type: ERRO_CADASTRO, payload: 'E-mail já cadastrado, inválido ou senha inferior a 6 digítos.' })
      })
      .then(res => {
        if (res.data.localId) {
          axios.put(`/users/${res.data.localId}.json`, {
            colegio: user.colegio,
            name: user.name,
            celular: user.celular,
            email: user.email
          })
            .catch(err => {
              console.log(err),
                dispatch({ type: ERRO_CADASTRO, payload: 'E-mail já cadastrado, inválido ou senha inferior a 6 digítos.' })
            })
            .then(() => {
              dispatch(login(user))
            })
        }
      })
  }
}

export const loadingUser = () => {
  return {
    type: LOADING_USER,
  }
}

export const userLoaded = () => {
  return {
    type: USER_LOADED
  }
}

export const login = user => {
  return dispatch => {
    dispatch(loadingUser())
    axios.post(`${authBaseURL}/verifyPassword?key=${API_KEY}`, {
      email: user.email,
      password: user.password,
      returnSecureToken: true
    })
      .catch(err => {
        console.log(err),
          dispatch({ type: ERRO_LOGIN, payload: 'E-mail e/ou senha inválidos.' })
      })
      .then(res => {
        if (res.data.localId) {
          user.token = res.data.idToken
          axios.get(`/users/${res.data.localId}.json`)
            .catch(err => {
              console.log(err),
                dispatch({ type: ERRO_LOGIN, payload: 'E-mail e/ou senha inválidos.' })
            })
            .then(res => {
              delete user.password
              user.name = res.data.name
              dispatch(userLogged(user))
              dispatch(userLoaded())
            })
        }
      })
  }
}
