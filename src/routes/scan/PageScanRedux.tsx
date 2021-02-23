import React from 'react'

import { useDispatch, useSelector } from 'react-redux';
import { scanNmap, scanSubdomain, scanZapSpider, selectNmap } from 'redux/reducer/scanSlice';

import PageScanContainer from './PageScanContainer'

function PageScanRedux() {
  const dispatch = useDispatch()
  const stateNmap = useSelector(selectNmap)
  const dispatchScanNmap = (urlString: string) => {
    dispatch(scanNmap(urlString))
  }
  const dispatchScanSubdomain = (urlString: string) => {
    dispatch(scanSubdomain(urlString))
  }
  const dispatchScanZapSpider = (urlString: string) => {
    dispatch(scanZapSpider(urlString))
  }
  const props = {
    dispatchScanNmap,
    dispatchScanSubdomain,
    dispatchScanZapSpider,
    stateNmap,
  }
  return (
    <PageScanContainer {...props} />
  )
}

export default PageScanRedux
