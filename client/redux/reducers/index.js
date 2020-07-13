import { combineReducers } from 'redux'
import { connectRouter } from 'connected-react-router'
import auth from './auth'
import registration from './registration'

const createRootReducer = (history) =>
  combineReducers({
    router: connectRouter(history),
    auth, // добовляем в в редакс новый редюссер
    registration
  })

export default createRootReducer
