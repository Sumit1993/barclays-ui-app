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
import { CartItem } from '../CartItem/Loadable';
import { messages } from './messages';

interface Props {}

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  const cards = [
    {
      bookID: 1,
      title: 'Harry Potter and the Half-Blood Prince (Harry Potter  #6)',
      authors: 'J.K. Rowling-Mary GrandPré',
      average_rating: 4.56,
      isbn: 439785960,
      language_code: 'eng',
      ratings_count: 1944099,
      price: 230,
      Image:
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/blue-book-reading-hid3b6f09.png',
    },
  ];

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
        {cards.map(item => (
          <CartItem key={item.bookID} {...{ item }} />
        ))}
        <Divider variant="middle" />
        <Box component="div" className={classes.btnContainer}>
          <Button
            variant="contained"
            size="large"
            color="primary"
            className={classes.orderBtn}
          >
            Place order
          </Button>
        </Box>
      </Box>
    </Grid>
  );
});
