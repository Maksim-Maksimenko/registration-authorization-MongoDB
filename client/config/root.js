/* eslint-disable react/jsx-props-no-spreading */
import React from 'react'
import PropTypes from 'prop-types'
import { Provider, useSelector } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { Switch, Route, Redirect, StaticRouter } from 'react-router-dom'

import store, { history } from '../redux'

import Registration from '../components/ registrationForm'
import Login from '../components/loginForm'
import NotFound from '../components/404'
import ChatWindow from '../components/ chatWindow'

import Startup from './startup'

const OnlyAnonymousRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((s) => s.auth)

  const func = (props) =>
    !!auth.user && !!auth.token ? (
      <Redirect to={{ pathname: '/mainWindowChat' }} />
    ) : (
      <Component {...props} />
    )
  return <Route {...rest} render={func} />
}

const PrivateRoute = ({ component: Component, ...rest }) => {
  const auth = useSelector((s) => s.auth)
  const func = (props) =>
    !!auth.user && !!auth.token ? (
      <Component {...props} />
    ) : (
      <Redirect
        to={{
          pathname: '/'
        }}
      />
    )
  return <Route {...rest} render={func} />
}

const types = {
  component: PropTypes.func.isRequired,
  location: PropTypes.shape({
    pathname: PropTypes.string
  }),
  user: PropTypes.shape({
    name: PropTypes.string,
    email: PropTypes.string
  }),
  token: PropTypes.string
}

const defaults = {
  location: {
    pathname: ''
  },
  user: null,
  token: ''
}

OnlyAnonymousRoute.propTypes = types
PrivateRoute.propTypes = types

PrivateRoute.defaultProps = defaults
OnlyAnonymousRoute.defaultProps = defaults

const RouterSelector = (props) =>
  typeof window !== 'undefined' ? <ConnectedRouter {...props} /> : <StaticRouter {...props} />

const RootComponent = (props) => {
  return (
    <Provider store={store}>
      <RouterSelector history={history} location={props.location} context={props.context}>
        <Startup>
          <Switch>
            {/* <OnlyAnonymousRoute exact path="/login" component={() => <Login />} /> */}
            <OnlyAnonymousRoute exact path="/" component={() => <Login />} />
            <OnlyAnonymousRoute exact path="/registration" component={() => <Registration />} />
            {/* <Route exact path="/mainWindowChat" component={() => <ChatWindow />} />  */}
            <PrivateRoute exact path="/mainWindowChat" component={() => <ChatWindow />} />
            <Route component={() => <NotFound />} />
          </Switch>
        </Startup>
      </RouterSelector>
    </Provider>
  )
}

export default RootComponent
