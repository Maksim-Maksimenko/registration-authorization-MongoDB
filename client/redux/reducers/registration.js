import { history } from '..'

const REGISTRATION_LOGIN = 'REGISTRATION_LOGIN'
const REGISTRATION_PASSWORD = 'REGISTRATION_PASSWORD'
const REGISTRATION_PHONE = 'REGISTRATION_PHONE'
const REGISTRATION_USER_NAME = 'REGISTRATION_USER_NAME'

const initialState = {
  email: '',
  password: '',
  phone: '',
  userName: '',
  user: {}
}

export default (state = initialState, action) => {
  switch (action.type) {
    case REGISTRATION_LOGIN: {
      return { ...state, email: action.email }
    }
    case REGISTRATION_PASSWORD: {
      return { ...state, password: action.password }
    }
    case REGISTRATION_PHONE: {
      return { ...state, phone: action.phone }
    }
    case REGISTRATION_USER_NAME: {
      return { ...state, userName: action.userName }
    }
    default:
      return state
  }
}

export function registrationLogin(email) {
  return { type: REGISTRATION_LOGIN, email }
}
export function registrationPassword(password) {
  return { type: REGISTRATION_PASSWORD, password }
}
export function registrationPhone(phone) {
  return { type: REGISTRATION_PHONE, phone }
}
export function registrationUserName(userName) {
  return { type: REGISTRATION_USER_NAME, userName }
}

export function SignUp() {
  return (dispatch, getState) => {
    const { email, password, phone, userName } = getState().registration
    fetch('/api/v1/registration', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        password,
        phone,
        userName
      })
    }).then((r) => {
      r.json()
      history.push('/')
    })
  }
}
