import {
  USER_LOGGED_IN,
  USER_LOGGED_OUT,
  USER_LOADED,
  LOADING_USER,
  ERRO_CADASTRO,
  ERRO_LOGIN
} from '../actions/actionTypes'

const initialState = {
  name: null,
  email: null,
  password: null,
  colegio: null,
  celular: null,
  isLoading: false,
  erroCadastro: '',
  erroLogin: '',
  renderErro: false,
  token: null,
  
}

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGGED_IN:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        token: action.payload.token,
        erroLogin: '',
        erroCadastro: '',
        renderErro: false,
      }
    case USER_LOGGED_OUT:
      return {
        ...initialState
      }
    case LOADING_USER:
      return {
        ...state,
        isLoading: true,
        erroCadastro: '',
        renderErro: false,
        erroLogin: '',
        
      }
    case USER_LOADED:
      return {
        ...state,
        isLoading: false,
        
      }
    case ERRO_CADASTRO:
      return {
        ...state,
        erroCadastro: action.payload,
        renderErro: true,
        isLoading: false,
        
      }
    case ERRO_LOGIN:
      return {
        ...state,
        erroLogin: action.payload,
        renderErro: true,
        isLoading: false,
        
      }
    default: 
      return state
  }
}

export default userReducer