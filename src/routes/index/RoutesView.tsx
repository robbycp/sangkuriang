import React, { lazy } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'

import withSuspense from 'hoc/withSuspense'
import Home from 'routes/home'

const PageDashboard = lazy(() => import('routes/dashboard'))
const PageProfile = lazy(() => import('routes/profile'))
const PageScan = lazy(() => import('routes/scan'))
const PageSettings = lazy(() => import('routes/settings'))
const ReduxTest = lazy(() => import('routes/reduxtest'))

interface ProtectedRoutesProps {
  isAuthenticated: boolean
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <>
        <Route path="/dashboard" component={withSuspense(PageDashboard)} />
        <Route path="/profile" component={withSuspense(PageProfile)} />
        <Route path="/redux" component={withSuspense(ReduxTest)} />
        <Route path="/scan" component={withSuspense(PageScan)} />
        <Route path="/settings" component={withSuspense(PageSettings)} />
      </>
    )
  }
  return (
    <Redirect
      to={{
        pathname: "/",
      }}
    />
  )
}

interface RoutesProps {
  isAuthenticated: boolean
  isLoading: boolean
}

const Routes: React.FC<RoutesProps> = ({ isAuthenticated, isLoading }) => {
  if (isLoading) {
    return <div>Loading</div>
  }
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <ProtectedRoutes isAuthenticated={isAuthenticated} />
    </Switch>
  )
}

export default Routes
