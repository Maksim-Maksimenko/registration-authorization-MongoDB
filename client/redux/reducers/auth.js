const UPDATE_LOGIN = 'UPDATE_LOGIN'
const UPDATE_PASSWORD = 'UPDATE_PASSWORD'
const LOGIN = 'LOGIN'

const initialState = {
  login: '',
  password: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_LOGIN: {
      return { ...state, login: action.login }
    }
    case UPDATE_PASSWORD: {
      return { ...state, password: action.password }
    }
    default:
      return state
  }
}

export function upadateLogin(login) {
  return { type: UPDATE_LOGIN, login }
}

export function upadatePassword(password) {
  return { type: UPDATE_PASSWORD, password }
}

export function logIn() {
  return (dispatch, getState) => {
    const { login, password } = getState().auth
    fetch('/api/v1/auth', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify({
        login,
        password
      })
    })
      .then((r) => r.json())
      .then((date) => {
        dispatch({ type: LOGIN, token: date.token })
      })
  }
}
