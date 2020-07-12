import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth // добовляем в в редакс новый редюссер
  })

export default createRootReducer
