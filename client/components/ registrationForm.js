import React from 'react'
import Head from './head'
import { history } from '../redux'

import './registration.scss'

const Registration = () => {
  return (
    <div>
      <Head title="Hello" />
      <div className="limiter">
        <div className="container-login100">
          <div className="register w-1/4 h-auto rounded-lg">
            <div className="form-title"> Registration Account</div>
            <form className="form validate-form ">
              <div className="validate-input input-text" data-validate="Enter username">
                <input className="input100" type="text" name="username" placeholder="User name" />
              </div>
              <div className="validate-input input-password" data-validate="Enter password">
                <input className="input100" type="password" name="pass" placeholder="Password" />
              </div>
              <div className="validate-input input-email" data-validate="Enter email">
                <input className="input100" type="text" name="email" placeholder="Email" />
              </div>
              <div className="validate-input input-phone" data-validate="Enter phone">
                <input className="input100" type="text" name="phone" placeholder="Phone" />
              </div>
              <div className="container-form-btn">
                <button
                  onClick={() => {
                    history.push(`/`)
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

Registration.propTypes = {}

export default Registration
