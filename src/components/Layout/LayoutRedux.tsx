import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { authSignout, selectIsAuth, selectMe } from 'redux/reducer/authSlice'

import LayoutView from './LayoutView'

interface Props {
  children: any;
}
function LayoutRedux(props: Props) {
  const dispatch = useDispatch()
  const meState = useSelector(selectMe)
  const isAuthState = useSelector(selectIsAuth)

  const dispatchSignOut = () => {
    dispatch(authSignout())
  }
  const newProps = {
    ...props,
    accountEmail: meState.me.user.email,
    dispatchSignOut,
    isAuthenticated: isAuthState.isAuthenticated,
  }
  return (
    <LayoutView {...newProps} />
  )
}

export default LayoutRedux
