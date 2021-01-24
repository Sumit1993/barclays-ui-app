/**
 *
 * CartPrice
 *
 */
import { Grid, Box, Typography, Divider, makeStyles } from '@material-ui/core';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {
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
  priceDetail: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(3),
  },
}));

export const CartPrice = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  return (
    <Grid
      item
      sm={5}
      md={3}
      justify="flex-start"
      alignItems="center"
      className={classes.grid}
    >
      <Box bgcolor="white" className={classes.box}>
        <Typography gutterBottom color="textSecondary" variant="h5" noWrap>
          Price details
        </Typography>
        <Divider variant="middle" />
        <div className={classes.priceDetail}>
          <Typography color="textSecondary" variant="body1">
            Price
          </Typography>
          <Typography variant="body1">{props.subTotal}</Typography>
        </div>
        <div className={classes.priceDetail}>
          <Typography color="textSecondary" variant="body1">
            Discount
          </Typography>
          <Typography variant="body1">0</Typography>
        </div>
        <div className={classes.priceDetail}>
          <Typography color="textSecondary" variant="body1">
            Delivery charges
          </Typography>
          <Typography variant="body1">Free</Typography>
        </div>
        <Divider variant="middle" />
        <div className={classes.priceDetail}>
          <Typography variant="h6">Total Amount</Typography>
          <Typography variant="h6">{props.subTotal}</Typography>
        </div>
      </Box>
    </Grid>
  );
});
