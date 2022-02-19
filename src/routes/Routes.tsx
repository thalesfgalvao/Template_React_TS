import React from 'react'
import { Redirect, Route } from 'react-router-dom'
import PrivateRoute from './PrivateRoute'
import PublicRoute from './PubliceRoute'

const Dashboard = React.lazy(() => import('../pages/Dashboard'))
const Login = React.lazy(() => import('../pages/Login'))

//attribute -  path : string - exact: boolean - route : component (wich router component will render the att component)
//at end, put the route in array "routes"

//root
const LoginRedirect = () => <Redirect to="/dashboard" />

const root = {
  path: '/',
  component: LoginRedirect,
  exact: true,
  route: Route
}

//dashboard
const dashboard = {
  path: '/dashboard',
  component: Dashboard,
  exact: false,
  route: PrivateRoute
}

//login
const login = {
  path: '/login',
  component: Login,
  exact: false,
  route: PublicRoute
}

const routes = [root, login, dashboard]

export default routes
