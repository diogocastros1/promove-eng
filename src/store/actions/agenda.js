import { SET_AGENDA } from './actionTypes'
import axios from 'axios'

export const addAgenda = agenda => {
  return (dispatch, getState) => {
    axios.post(`/agenda.json?auth=${getState().user.token}`, { ...agenda })
      .catch(err => console.log(err))
      .then(res => { console.log(res.data) })
  }

}

/* sem o firebase podemos utilizar a estrutura abaixo 
 return {
   type: ADD_AGENDA,
   payload: agenda,
 } 
 */


export const setAgenda = agenda => {
  return {
    type: SET_AGENDA,
    payload: agenda
  }
}

export const getPost = () => {
  return (dispatch) => {
    axios.get(`/agenda.json`)
      .catch(err => console.log(err))
      .then(res => {
        const rawAgenda = res.data
        const agenda = []
        for (let key in rawAgenda) {
          agenda.push({
            ...rawAgenda[key],
            id: key
          })
        }
        dispatch(setAgenda(agenda))
      })
  }
}

export const removeAgenda = id => {
  return (dispatch, getState) => {
    axios.delete(`/agenda/${id}.json?auth=${getState().user.token}`)
      .catch(err => console.log(err))
      .then(() => {
        dispatch(getPost())
      })
  }

}

