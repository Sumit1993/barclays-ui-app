/**
 *
 * CartItems
 *
 */
import {
  Grid,
  Box,
  Typography,
  Divider,
  Button,
  makeStyles,
} from '@material-ui/core';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { useDispatch, useSelector } from 'react-redux';
import { placeOrderSaga } from '../../../store/cart/saga';
import { cartActions, reducer, sliceKey } from '../../../store/cart/slice';
import { ICartItem } from '../../../store/cart/types';
import { selectUser } from '../../../store/user/selectors';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { CartItem } from '../CartItem/Loadable';
import { messages } from './messages';

interface Props {
  items: ICartItem[];
  subTotal: number;
}

const useStyles = makeStyles(theme => ({
  box: {
    padding: theme.spacing(2),
    minHeight: '50vh',
    width: '100%',
  },
  grid: {
    margin: theme.spacing(2),
    display: 'flex',
    flexDirection: 'column',
  },
  btnContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
  },
  orderBtn: {
    marginTop: theme.spacing(1),
  },
}));

export const CartItems = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: placeOrderSaga });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const placeOrder = () =>
    dispatch(
      cartActions.placeOrder({
        amount: props.subTotal,
        email: user.userInfo ? user.userInfo.email : '',
        name: user.userInfo ? user.userInfo.name : '',
        host: window.location.origin,
      }),
    );
  const classes = useStyles();

  return (
    <Grid
      item
      xs={12}
      sm={5}
      md={7}
      justify="center"
      alignItems="center"
      className={classes.grid}
    >
      <Box bgcolor="white" className={classes.box}>
        <Typography gutterBottom variant="h5" noWrap>
          My Cart
        </Typography>
        <Divider variant="middle" />
        {props.items.map((item, i) => (
          <>
            <CartItem key={item.bookID} {...{ item }} />
            {i !== props.items.length - 1 && (
              <Divider
                variant="middle"
                style={{ marginTop: '1em', marginBottom: '1em' }}
              />
            )}
          </>
        ))}
        <Divider variant="middle" />
        <Box component="div" className={classes.btnContainer}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.orderBtn}
            onClick={placeOrder}
          >
            Place order
          </Button>
        </Box>
      </Box>
    </Grid>
  );
});
