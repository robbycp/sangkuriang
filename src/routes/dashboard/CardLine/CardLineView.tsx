import React from 'react'

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import ChartLine from 'components/Chart/Line'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    card: {
      position: 'relative',
      borderRadius: '8px',
      height: 200,
      width: 400,
    },
    title: {
      position: 'absolute',
      left: 16,
      top: 16,
      zIndex: 2,
    }
  }),
);

interface Props {
  data: any;
  backgroundColor: string;
  title: string;
}

function CardLineView(props: Props) {
  const { backgroundColor, data, title } = props
  const classes = useStyles()
  console.log('backgroundColor', backgroundColor)
  return (
    <Box className={classes.card} style={{ backgroundColor }} marginRight={4} marginBottom={4}>
      <Typography variant="h6" className={classes.title}>
        {title}
      </Typography>
      <ChartLine data={data} />
    </Box>
  )
}

export default CardLineView
