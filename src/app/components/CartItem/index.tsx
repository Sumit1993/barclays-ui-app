/**
 *
 * CartItem
 *
 */
import {
  Grid,
  ButtonBase,
  Typography,
  Box,
  IconButton,
  TextField,
  makeStyles,
  Button,
} from '@material-ui/core';
import { AddCircle, DeleteForever, RemoveCircle } from '@material-ui/icons';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { ICartItem } from '../../../store/cart/types';
import { messages } from './messages';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { cartActions, reducer, sliceKey } from '../../../store/cart/slice';
import { removeItemSaga, updateQuantitySaga } from '../../../store/cart/saga';
import { useDispatch } from 'react-redux';

interface Props {
  item: ICartItem;
}

const useStyles = makeStyles(theme => ({
  image: {
    width: '12em',
    height: '12em',
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  price: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export function CartItem(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: removeItemSaga });
  useInjectSaga({ key: sliceKey, saga: updateQuantitySaga });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  const { item } = props;

  const dispatch = useDispatch();

  const updateQuantity = quantity => {
    dispatch(cartActions.updateQuantity({ bookId: item.bookID, quantity }));
  };

  const deleteItem = () => {
    dispatch(cartActions.removeItem({ bookId: item.bookID }));
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={6} md={4}>
        <ButtonBase className={classes.image}>
          <img className={classes.img} alt="complex" src={item.Image} />
        </ButtonBase>
      </Grid>
      <Grid item xs={12} sm={6} md={8}>
        <Typography variant="h5">{item.title}</Typography>
        <Typography color="textSecondary" variant="caption">
          {item.authors}
        </Typography>
        <Typography variant="h5" className={classes.price}>
          ₹{item.price}
        </Typography>
        <Box>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => updateQuantity(item.quantity + 1)}
          >
            <AddCircle />
          </IconButton>
          <TextField
            id="standard-read-only-input"
            variant="outlined"
            value={item.quantity}
            size="small"
            type="number"
            onChange={event =>
              updateQuantity(Number.parseInt(event.target.value))
            }
          />
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => updateQuantity(item.quantity - 1)}
          >
            <RemoveCircle />
          </IconButton>
          <IconButton
            color="primary"
            aria-label="add to shopping cart"
            onClick={() => deleteItem()}
          >
            <DeleteForever />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}
