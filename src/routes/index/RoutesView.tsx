import React, { lazy } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import withSuspense from 'hoc/withSuspense'
import Home from 'routes/home'

const PageScan = lazy(() => import('routes/scan'))
const ReduxTest = lazy(() => import('routes/reduxtest'))

interface ProtectedRoutesProps {
  isAuthenticated: boolean
}

const ProtectedRoutes: React.FC<ProtectedRoutesProps> = ({ isAuthenticated }) => {
  if (isAuthenticated) {
    return (
      <>
        <Route path="/scan" component={withSuspense(PageScan)} />
        <Route path="/redux" component={withSuspense(ReduxTest)} />
      </>
    )
  }
  return null
}

interface RoutesProps {
  isAuthenticated: boolean
  isLoading: boolean
}

const Routes: React.FC<RoutesProps> = ({ isAuthenticated, isLoading }) => {
  if (isLoading) {
    return <div>Null</div>
  }
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Home} />
        <ProtectedRoutes isAuthenticated={isAuthenticated} />
      </Switch>
    </BrowserRouter>
  )
}

export default Routes
