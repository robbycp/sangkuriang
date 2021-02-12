import React from 'react'
import { useDispatch } from 'react-redux'
import { authSignin } from 'redux/reducer/authSlice'

import PageHomeView from './PageHomeView'

interface SigninPayload {
  email: string;
  password: string;
}
function PageHomeRedux() {
  const dispatch = useDispatch()
  const dispatchSignin = (payload: SigninPayload) => {
    dispatch(authSignin(payload))
  }
  const props = {
    dispatchSignin,
  }
  return (
    <PageHomeView {...props} />
  )
}

export default PageHomeRedux
