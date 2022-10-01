import { 
  ATUALIZA_NOTA,
  SELECAO_PROVA,
  RESULTADO_PROVA,
  SELECAO_SIMULADO
} from '../actions/actionTypes'

const initialState = {
  nota: 0,
  prova: 0,
  gabarito: false,
  simulado: null,
}

const notaReducer = (state = initialState, action) => {
  switch (action.type) {
    case ATUALIZA_NOTA:
      return {
          nota: action.payload,
        }
    case SELECAO_PROVA:
      return {
          prova: action.payload,
          gabarito: false,
        }
    case RESULTADO_PROVA:
      return {
          gabarito: true,
        }
    case SELECAO_SIMULADO:
      return {
          simulado: action.payload,
        }

    default:
      return state
  }
}

export default notaReducer
