import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { scanNmap, selectNmap } from 'redux/reducer/scanSlice';

import PageScanContainer from './PageScanContainer'

function PageScanRedux() {
  const dispatch = useDispatch()
  const stateNmap = useSelector(selectNmap)
  const dispatchScanNmap = (urlString: string) => {
    dispatch(scanNmap(urlString))
  }
  const props = {
    dispatchScanNmap,
    stateNmap,
  }
  return (
    <PageScanContainer {...props} />
  )
}

export default PageScanRedux
