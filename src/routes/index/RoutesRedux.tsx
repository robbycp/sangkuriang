import React from 'react'

import RoutesView from './RoutesView'

function RoutesRedux() {
  const props = {
    isLoading: false,
    isAuthenticated: true,
  }
  return (
    <RoutesView {...props} />
  )
}

export default RoutesRedux
