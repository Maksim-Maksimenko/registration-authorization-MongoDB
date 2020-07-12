import React from 'react'
import { history } from '../redux'
import Head from './head'
import './login.scss'

const Login = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="limiter">
        <div className="container-login100">
          <div className="register w-1/4 h-auto rounded-lg">
            <div className="form-title">Account Login</div>
            <form className="form validate-form ">
              <div className="validate-input input-text" data-validate="Enter username">
                <input className="input100" type="text" name="username" placeholder="User name" />
              </div>
              <div className="validate-input input-password" data-validate="Enter password">
                <input className="input100" type="password" name="pass" placeholder="Password" />
              </div>
              <div className="container-form-btn">
                <button
                  onClick={() => {
                    history.push(`/mainWindowChat`)
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
