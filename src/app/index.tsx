/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

import { GlobalStyle } from 'styles/global-styles';

import { NotFoundPage } from './components/NotFoundPage/Loadable';
import { useTranslation } from 'react-i18next';
import { NavBar } from './containers/NavBar/index';
import { Landing } from './containers/Landing/Loadable';
import { Cart } from './containers/Cart/Loadable';
import { makeStyles, Container } from '@material-ui/core';
import { Signup } from './containers/Signup/Loadable';
import { Signin } from './containers/Signin/Loadable';

const useStyles = makeStyles(theme => ({
  cardGrid: {
    padding: theme.spacing(6),
  },
}));

export function App() {
  const { i18n } = useTranslation();
  const classes = useStyles();
  return (
    <BrowserRouter>
      <Helmet
        titleTemplate="%s - Barclays UI APP"
        defaultTitle="Barclays UI APP"
        htmlAttributes={{ lang: i18n.language }}
      >
        <meta name="description" content="A Barclays UI APP" />
      </Helmet>
      <NavBar />
      <Container className={classes.cardGrid} maxWidth="lg">
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/signup" component={Signup} />
          <Route exact path="/signin" component={Signin} />
          <Route component={NotFoundPage} />
        </Switch>
        <GlobalStyle />
      </Container>
    </BrowserRouter>
  );
}
