import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { history } from '../redux'
import Head from './head'
import './login.scss'
import { upadateLogin, upadatePassword, logIn } from '../redux/reducers/auth'

const Login = () => {
  const dispatch = useDispatch()
  const login = useSelector((s) => s.auth.email)
  const password = useSelector((s) => s.auth.password)
  return (
    <div>
      <Head title="Hello" />
      <div className="limiter">
        <div className="container-login100">
          <div className="register w-1/4 h-auto rounded-lg">
            <div className="form-title">Account Login</div>
            <form className="form validate-form ">
              <div className="validate-input input-text" data-validate="Enter email">
                <input
                  onChange={(e) => {
                    dispatch(upadateLogin(e.target.value))
                  }}
                  value={login}
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="email"
                />
              </div>
              <div className="validate-input input-password" data-validate="Enter password">
                <input
                  onChange={(e) => {
                    dispatch(upadatePassword(e.target.value))
                  }}
                  value={password}
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
              </div>
              <div className="container-form-btn">
                <button
                  onClick={() => {
                    dispatch(logIn())
                  }}
                  type="button"
                  className="form-btn"
                >
                  Log In
                </button>
                <button
                  onClick={() => {
                    history.push(`/registration`)
                  }}
                  type="button"
                  className="form-btn"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

Login.propTypes = {}

export default React.memo(Login)
