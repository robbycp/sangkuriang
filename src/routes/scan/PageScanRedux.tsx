import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { scanNmap, scanZapSpider, selectNmap } from 'redux/reducer/scanSlice';

import PageScanContainer from './PageScanContainer'

function PageScanRedux() {
  const dispatch = useDispatch()
  const stateNmap = useSelector(selectNmap)
  const dispatchScanNmap = (urlString: string) => {
    dispatch(scanNmap(urlString))
  }
  const dispatchScanZapSpider = (urlString: string) => {
    dispatch(scanZapSpider(urlString))
  }
  const props = {
    dispatchScanNmap,
    dispatchScanZapSpider,
    stateNmap,
  }
  return (
    <PageScanContainer {...props} />
  )
}

export default PageScanRedux
