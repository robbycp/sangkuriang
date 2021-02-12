import React from 'react'

import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import FormLabel from '@material-ui/core/FormLabel';
import FormControl from '@material-ui/core/FormControl';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    formControl: {
      margin: theme.spacing(3),
    },
  }),
);

function PageScanView() {
  const classes = useStyles();

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

  return (
    <div>
      <Grid>
        <Grid className={classes.formControl}>
          <TextField type="url" onChange={handleChangeUrl} label="Target URL" value={urlScanned} />
        </Grid>
        <Grid>
          <FormControl component="fieldset" className={classes.formControl}>
            <FormLabel component="legend">Scan Tools</FormLabel>
            <FormGroup>
              <FormControlLabel
                control={<Checkbox checked={scanTools.nmap} onChange={handleChangeScanTool} name="nmap" />}
                label="NMAP"
              />
              <FormControlLabel
                control={<Checkbox checked={scanTools.owaspZap} onChange={handleChangeScanTool} name="owaspZap" />}
                label="OWASP ZAP"
              />
              {scanTools.owaspZap && (
                <>
                  <TextField
                    error={!!nmapPortError}
                    onChange={handleChangePort}
                    label="NMAP ports range"
                    value={nmapPortRange}
                    type="number"
                    helperText={nmapPortError}
                  />
                  <FormControl component="fieldset" className={classes.formControl}>
                    <FormLabel component="legend">OWASP ZAP mode</FormLabel>
                    <FormGroup>
                      <FormControlLabel
                        control={<Checkbox checked={owaspZapMode.full} onChange={handleChangeOwaspMode} name="full" />}
                        label="Full"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={owaspZapMode.spider} onChange={handleChangeOwaspMode} name="spider" />}
                        label="Spider"
                      />
                      <FormControlLabel
                        control={<Checkbox checked={owaspZapMode.active} onChange={handleChangeOwaspMode} name="active" />}
                        label="Active"
                      />
                    </FormGroup>
                  </FormControl>
                </>
              )}
              <FormControlLabel
                control={<Checkbox checked={scanTools.subdomainEnum} onChange={handleChangeScanTool} name="subdomainEnum" />}
                label="Subdomain Enumeration"
              />
              <FormControlLabel
                control={<Checkbox checked={scanTools.sslScanner} onChange={handleChangeScanTool} name="sslScanner" />}
                label="SSL Scanner"
              />
            </FormGroup>
          </FormControl>
        </Grid>
        <Button variant="contained" color="primary" disabled={isSubmitDisabled}>
          Scan
        </Button>
      </Grid>
    </div>
  )
}

export default PageScanView
