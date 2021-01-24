/**
 *
 * Card
 *
 */
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  Divider,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import { useStyles } from './styles';
import { IBookInfo } from '../../../store/book/types';
import { useDispatch } from 'react-redux';
import { cartActions, reducer, sliceKey } from '../../../store/cart/slice';
import {
  useInjectReducer,
  useInjectSaga,
} from '../../../utils/redux-injectors';
import { addCartSaga } from '../../../store/cart/saga';

interface Props {
  book: IBookInfo;
}

export const BookCard = memo((props: Props) => {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: addCartSaga });
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();
  const dispatch = useDispatch();
  const { book } = props;

  const addToCart = () =>
    dispatch(cartActions.addItem({ bookId: book.bookID }));

  return (
    <Grid item xs={12} sm={4} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={book.Image}
          title={book.title}
          style={{ backgroundSize: 'contain' }}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.section}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={9}>
                <Typography gutterBottom variant="h5" noWrap>
                  {book.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6">
                  ₹{book.price}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="body2" noWrap>
              {book.title}
            </Typography>
            <Typography
              color="textSecondary"
              variant="caption"
              align="right"
              component="div"
            >
              - {book.authors}
            </Typography>
          </div>
          <Divider variant="middle" />
          <div
            className={classes.section}
            style={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <Typography color="textSecondary" variant="body2">
              Avarage Rating
            </Typography>
            <Rating
              name="read-only"
              value={book.average_rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography color="textSecondary" variant="body2">
              Ratings
            </Typography>
            <Typography variant="subtitle2">{book.ratings_count}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={addToCart}>
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
});
