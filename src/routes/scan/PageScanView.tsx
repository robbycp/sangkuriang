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

interface ScanTools {
  nmap: boolean
  owaspZap: boolean
  subdomainEnum: boolean
  sslScanner: boolean
}

interface OwaspZapMode {
  full: boolean
  spider: boolean
  active: boolean
}

interface Props {
  handleChangeOwaspMode: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangePort: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangeUrl: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleChangeScanTool: (event: React.ChangeEvent<HTMLInputElement>) => void,
  handleSubmit: () => void,
  isSubmitDisabled: boolean,
  nmapPortError: string,
  nmapPortRange: number,
  owaspZapMode: OwaspZapMode,
  scanTools: ScanTools,
  stateNmap: any,
  urlScanned: string,
}

function PageScanView(props: Props) {
  const {
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
    stateNmap,
    urlScanned,
  } = props
  console.log('stateNmap', stateNmap)
  const classes = useStyles();
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
        <Button
          variant="contained"
          color="primary"
          disabled={isSubmitDisabled}
          onClick={handleSubmit}
        >
          Scan
        </Button>
      </Grid>
    </div>
  )
}

export default PageScanView
