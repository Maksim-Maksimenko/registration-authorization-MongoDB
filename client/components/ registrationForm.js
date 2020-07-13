import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Head from './head'
// import { history } from '../redux'
import {
  registrationLogin,
  registrationPassword,
  registrationPhone,
  registrationUserName,
  SignUp
} from '../redux/reducers/registration'

import './registration.scss'

const Registration = () => {
  const dispatch = useDispatch()
  const login = useSelector((s) => s.registration.email)
  const password = useSelector((s) => s.registration.password)
  const phone = useSelector((s) => s.registration.phone)
  const userName = useSelector((s) => s.registration.userName)
  return (
    <div>
      <Head title="Hello" />
      <div className="limiter">
        <div className="container-login100">
          <div className="register w-1/4 h-auto rounded-lg">
            <div className="form-title"> Registration Account</div>
            <form className="form validate-form ">
              <div className="validate-input input-text" data-validate="Enter username">
                <input
                  onChange={(e) => {
                    dispatch(registrationUserName(e.target.value))
                  }}
                  value={userName}
                  className="input100"
                  type="text"
                  name="username"
                  placeholder="User name"
                />
              </div>
              <div className="validate-input input-password" data-validate="Enter password">
                <input
                  onChange={(e) => {
                    dispatch(registrationPassword(e.target.value))
                  }}
                  value={password}
                  className="input100"
                  type="password"
                  name="pass"
                  placeholder="Password"
                />
              </div>
              <div className="validate-input input-email" data-validate="Enter email">
                <input
                  onChange={(e) => {
                    dispatch(registrationLogin(e.target.value))
                  }}
                  value={login}
                  className="input100"
                  type="text"
                  name="email"
                  placeholder="Email"
                />
              </div>
              <div className="validate-input input-phone" data-validate="Enter phone">
                <input
                  onChange={(e) => {
                    dispatch(registrationPhone(e.target.value))
                  }}
                  value={phone}
                  className="input100"
                  type="text"
                  name="phone"
                  placeholder="Phone"
                />
              </div>
              <div className="container-form-btn">
                <button
                  onClick={() => {
                    dispatch(SignUp())
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
