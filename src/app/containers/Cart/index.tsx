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
import { reducer, sliceKey } from '../../../store/cart/slice';
import { selectCart } from '../../../store/cart/selectors';
import { addCartSaga } from '../../../store/cart/saga';
import { messages } from './messages';
import { EmptyCart } from '../../components/EmptyCart/Loadable';
import { CartItems } from '../../components/CartItems/Loadable';
import { CartPrice } from '../../components/CartPrice/Loadable';
import { Grid } from '@material-ui/core';

interface Props {}

export function Cart(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: addCartSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const cart = useSelector(selectCart);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  return (
    <>
      <Helmet>
        <title>Cart</title>
        <meta name="description" content="Description of Cart" />
      </Helmet>
      {cart.cartInfo?.items.length ? (
        <Grid container justify="flex-start">
          <CartItems items={cart.cartInfo.items} />
          <CartPrice subTotal={cart.cartInfo.subTotal} />
        </Grid>
      ) : (
        <EmptyCart />
      )}
    </>
  );
}
