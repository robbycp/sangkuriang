import React from 'react'
import { useSelector } from 'react-redux'

import { selectIsAuth } from 'redux/reducer/authSlice'

import RoutesView from './RoutesView'

function RoutesRedux() {
  const isAuthState = useSelector(selectIsAuth)
  const props = {
    isLoading: isAuthState.isLoading,
    isAuthenticated: isAuthState.isAuthenticated,
  }
  return (
    <RoutesView {...props} />
  )
}

export default RoutesRedux
