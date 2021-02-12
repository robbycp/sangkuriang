import React from 'react';
import clsx from 'clsx';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';

import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    margin: {
      margin: theme.spacing(1),
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    textField: {
      width: '100%',
    },
  }),
);

interface State {
  email: string;
  password: string;
  showPassword: boolean;
}

interface Props {
  dispatchSignin: (payload: any) => any
}

function PageHomeView(props: Props) {
  const { dispatchSignin } = props
  const classes = useStyles()
  const [values, setValues] = React.useState<State>({
    email: '',
    password: '',
    showPassword: false,
  });
  const [isSubmitDisabled, setisSubmitDisabled] = React.useState<boolean>(true)

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  const handleSubmit = () => {
    dispatchSignin(values)
  }

  React.useEffect(() => {
    if (!!values.email && !!values.password) {
      setisSubmitDisabled(false)
    }
  }, [values.email, values.password])

  return (
    <div className={classes.root}>
      <Grid container spacing={3} alignItems="center" justify="center">
        <Grid item xs={12} sm={4}>
          <Paper className={classes.paper}>
            <TextField
              className={clsx(classes.margin, classes.textField)}
              required
              id="standard-required"
              label="Email"
              value={values.email}
              type="email"
              onChange={handleChange('email')}
            />
            <FormControl className={clsx(classes.margin, classes.textField)}>
              <InputLabel htmlFor="standard-adornment-password">Password</InputLabel>
              <Input
                id="standard-adornment-password"
                type={values.showPassword ? 'text' : 'password'}
                value={values.password}
                onChange={handleChange('password')}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {values.showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              disabled={isSubmitDisabled}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  )
}

export default PageHomeView
