/**
 *
 * Cart
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectCart } from './selectors';
import { cartSaga } from './saga';
import { messages } from './messages';
import { Grid } from '@material-ui/core';
import { EmptyCart } from '../../components/EmptyCart/Loadable';
import { CartItems } from '../../components/CartItems/Loadable';
import { CartPrice } from '../../components/CartPrice/Loadable';

interface Props {}

export function Cart(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: cartSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cart = useSelector(selectCart);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const isEmpty = false;
  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Description of Cart" />
      </Helmet>
      {isEmpty && <EmptyCart />}
      <Grid container>
        <CartItems />
        <CartPrice />
      </Grid>
    </>
  );
}
