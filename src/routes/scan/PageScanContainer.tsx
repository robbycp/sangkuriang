import React from 'react'

import PageScanView from './PageScanView'

interface Props {
  dispatchScanNmap: (payload: string) => void
  dispatchScanSubdomain: (payload: string) => void
  dispatchScanZapSpider: (payload: string) => void
  stateNmap: object
}

function PageScanContainer(props: Props) {
  const { dispatchScanNmap, dispatchScanSubdomain, dispatchScanZapSpider } = props
  const [urlScanned, seturlScanned] = React.useState('')
  const handleChangeUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
    seturlScanned(event.target.value);
  };

  const [scanTools, setScanTools] = React.useState({
    nmap: false,
    owaspZap: false,
    subdomainEnum: false,
    sslScanner: false,
  });
  const handleChangeScanTool = (event: React.ChangeEvent<HTMLInputElement>) => {
    setScanTools({ ...scanTools, [event.target.name]: event.target.checked });
  };

  const [nmapPortRange, setnmapPortRange] = React.useState(0)
  const [nmapPortError, setnmapPortError] = React.useState('')
  React.useEffect(() => {
    if (nmapPortRange <= 0 || nmapPortRange > 65536) {
      setnmapPortError('Port must be 1 - 65536')
    } else {
      setnmapPortError('')
    }
  }, [nmapPortRange])
  const [owaspZapMode, setowaspZapMode] = React.useState({
    full: false,
    spider: false,
    active: false,
  })

  const handleChangePort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setnmapPortRange(Number(event.target.value));
  };
  const handleChangeOwaspMode = (event: React.ChangeEvent<HTMLInputElement>) => {
    setowaspZapMode({ ...owaspZapMode, [event.target.name]: event.target.checked });
  };

  const handleSubmit = () => {
    if (scanTools.nmap) {
      dispatchScanNmap(urlScanned)
    }
    if (scanTools.owaspZap) {
      if (owaspZapMode.spider) {
        dispatchScanZapSpider(urlScanned)
      }
    }
    if (scanTools.subdomainEnum) {
      dispatchScanSubdomain(urlScanned)
    }
  }

  const [isSubmitDisabled, setIsSubmitDisabled] = React.useState(true)
  React.useEffect(() => {
    if (
      urlScanned.length > 0
      && [scanTools.nmap, scanTools.owaspZap, scanTools.sslScanner, scanTools.subdomainEnum].filter((i) => !!i).length > 0
    ) {
      setIsSubmitDisabled(false)
    } else {
      setIsSubmitDisabled(true)
    }
    if (scanTools.owaspZap) {
      if (
        !nmapPortError
        && [owaspZapMode.full, owaspZapMode.spider, owaspZapMode.active].filter((i) => !!i).length > 0
      ) {
        setIsSubmitDisabled(false)
      } else {
        setIsSubmitDisabled(true)
      }
    }
  }, [urlScanned.length, scanTools, nmapPortRange, owaspZapMode, nmapPortError])

  const nextProps = {
    ...props,
    handleChangeOwaspMode,
    handleChangePort,
    handleChangeUrl,
    handleChangeScanTool,
    handleSubmit,
    isSubmitDisabled,
    nmapPortError,
    nmapPortRange,
    owaspZapMode,
    scanTools,
    urlScanned,
  }
  return (
    <PageScanView {...nextProps} />
  )
}

export default PageScanContainer
