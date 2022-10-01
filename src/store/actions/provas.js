import {
  ATUALIZA_NOTA,
  SELECAO_PROVA,
  RESULTADO_PROVA,
  SELECAO_SIMULADO
} from './actionTypes'

export const atualizaNota = nota => {
  return {
    type: ATUALIZA_NOTA,
    payload: nota
  }
}

export const somaNota = nota => {
  return dispatch => {
    const soma = nota + 10
    dispatch(atualizaNota(soma))
    console.log(nota)
    console.log(soma)
  }
}

export const subtraiNota = nota => {
  return dispatch => {
    const soma = nota - 10
    dispatch(atualizaNota(soma))
  }
}

export const resetaNota = () => {
  return dispatch => {
    const soma = 0
    dispatch(atualizaNota(soma))
  }
}

export const selecaoProva = (prova) => {
  return {
    type: SELECAO_PROVA,
    payload: prova,
  }
}

export const resultadoProva = () => {
  return {
    type: RESULTADO_PROVA,
  }
}
export const selecaoSimulado = (num) => {
  return {
    type: SELECAO_SIMULADO,
    payload: num,
  }
}