import {
  createStore,
  combineReducers,
  compose,
  applyMiddleware,
} from 'redux'
import thunk from 'redux-thunk'
import userReducer from './reducers/user'
import agendaReducer from './reducers/agenda'
import provaReducer from './reducers/provas'
import messageReducer from './reducers/message'

const reducers = combineReducers({
  user: userReducer,
  agenda: agendaReducer,
  prova: provaReducer,
  message: messageReducer
})

const storeConfig = () => {
  return createStore(reducers, compose(applyMiddleware(thunk)))
}

export default storeConfig