import { SET_AGENDA, REMOVE_AGENDA } from '../actions/actionTypes'

const initialState = {
  agenda: [],
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_AGENDA:
      return {
        ...state,
        agenda: action.payload,
      }
    default:
      return state
  }
}

export default reducer