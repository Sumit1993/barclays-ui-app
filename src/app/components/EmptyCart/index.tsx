/**
 *
 * EmptyCart
 *
 */
import { Box, Typography, Grid, ButtonBase } from '@material-ui/core';
import React, { memo } from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';
import { useStyles } from './styles';
import EmptyCartImage from '../../../assets/images/empty-cart.png';

interface Props {}

export const EmptyCart = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  return (
    <Box bgcolor="white" className={classes.box}>
      <Typography gutterBottom variant="h5" noWrap>
        My Cart
      </Typography>
      <Grid container>
        <Grid
          item
          xs
          justify="center"
          alignItems="center"
          className={classes.grid}
        >
          <ButtonBase className={classes.image}>
            <img className={classes.img} alt="complex" src={EmptyCartImage} />
          </ButtonBase>
          <Typography variant="h5">Your cart is empty</Typography>
          <Typography color="textSecondary" variant="caption">
            Add Items to it now
          </Typography>
        </Grid>
      </Grid>
    </Box>
  );
});
