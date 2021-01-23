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
} from '@material-ui/core';
import { AddCircle, RemoveCircle } from '@material-ui/icons';
import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { messages } from './messages';

interface Props {
  item: any;
}

const useStyles = makeStyles(theme => ({
  image: {
    width: '15em',
    height: '15em',
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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  const { item } = props;

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
          <IconButton color="primary" aria-label="add to shopping cart">
            <AddCircle />
          </IconButton>
          <TextField
            id="standard-read-only-input"
            variant="outlined"
            value="1"
            size="small"
            type="number"
            InputProps={{
              readOnly: true,
            }}
          />
          <IconButton color="primary" aria-label="add to shopping cart">
            <RemoveCircle />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
}
