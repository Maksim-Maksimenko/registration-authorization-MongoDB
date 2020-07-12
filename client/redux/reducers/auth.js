import { history } from '..'

const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const LOGIN = 'LOGIN'

const initialState = {
  email: '',
  password: '',
  token: '',
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, email: action.email }
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.password }
    }
    case LOGIN: {
      return { ...state, token: action.token, password: '', user: action.user }
    }
    default:
      return state
  }
}

export function upadateLogin(email) {
  return { type: UPDATE_LOGIN, email }
}

export function upadatePassword(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function logIn() {
  return (dispatch, getState) => {
    const { email, password } = getState().auth
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password
      })
    })
      .then((r) => r.json())
      .then((date) => {
        dispatch({ type: LOGIN, token: date.token, user: date.user })
        history.push('/mainWindowChat')
      })
  }
}
