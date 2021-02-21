import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import blue from '@material-ui/core/colors/blue';
import green from '@material-ui/core/colors/green';
import orange from '@material-ui/core/colors/orange';
import purple from '@material-ui/core/colors/purple';
import red from '@material-ui/core/colors/red';

import Pie from 'components/Chart/Pie'
import dataMock from 'services/mockData'

import CardLine from './CardLine'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    pieVulna: {
      width: '100%',
      height: 500,
    }
  }),
);

const mockChart = [
  {
    title: 'Target',
    backgroundColor: blue[100],
  },
  {
    title: 'Sub Domains',
    backgroundColor: orange[100],
  },
  {
    title: 'Endpoints',
    backgroundColor: red[100],
  },
  {
    title: 'Vulnerabilities',
    backgroundColor: purple[100],
  },
  {
    title: 'Scans Perfomed',
    backgroundColor: green[100],
  },
]
function PageDashboardView() {
  const classes = useStyles()
  return (
    <Grid container>
      <Grid container direction="row" alignItems="center" justify="center">
        {mockChart.map((item) => (
          <CardLine key={item.title} data={dataMock.dataLine} {...item} />
        ))}
      </Grid>
      <Grid xs={12} item>
        <Grid>
          Summary
          <Grid xs={12} sm={8} alignItems="center" justify="center">
            Vulnerabilities breakdown by Severity
            <div className={classes.pieVulna}>
              <Pie data={dataMock.dataPie} />
            </div>
          </Grid>
          <Grid xs={12} sm={4}>
            Most vulnerable targets
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default PageDashboardView
