import React from 'react'

import LayoutView from './LayoutView'

interface Props {
  children: any;
}
function LayoutRedux(props: Props) {
  const newProps = {
    ...props,
    isAuthenticated: true,
    accountName: 'Budi',
  }
  return (
    <LayoutView {...newProps} />
  )
}

export default LayoutRedux
