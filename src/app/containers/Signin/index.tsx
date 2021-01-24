/**
 *
 * Signin
 *
 */

import {
  makeStyles,
  Container,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  Link,
} from '@material-ui/core';
import { LockOutlined } from '@material-ui/icons';
import * as React from 'react';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { signinSaga } from '../../../store/user/saga';
import { selectUser } from '../../../store/user/selectors';
import { userActions, reducer, sliceKey } from '../../../store/user/slice';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';

import { messages } from './messages';

interface Props {}

const useStyles = makeStyles(theme => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export function Signin(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: signinSaga });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const history = useHistory();

  const goToSignup = () => history.push('./signup');

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signinUser = event => {
    event.preventDefault();
    dispatch(userActions.signinUser({ email, password }));
  };

  React.useEffect(() => {
    if (user.userInfo) {
      history.replace('/');
    }
  }, [user]);

  return (
    <>
      <Helmet>
        <title>Signin</title>
        <meta name="description" content="Description of Signin" />
      </Helmet>
      <Container component="main" maxWidth="xs">
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
              onChange={event => setEmail(event.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={event => setPassword(event.target.value)}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="button"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={signinUser}
            >
              Sign In
            </Button>
            <Grid container>
              <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
              <Grid item>
                <Link href="#" variant="body2" onClick={goToSignup}>
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
      </Container>
    </>
  );
}
