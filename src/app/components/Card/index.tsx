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

interface Props {
  card: {
    bookID: number;
    title: string;
    authors: string;
    average_rating: number;
    isbn: number;
    language_code: string;
    ratings_count: number;
    price: number;
    Image: string;
  };
}

export const BookCard = memo((props: Props) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const classes = useStyles();

  const { card } = props;

  return (
    <Grid item key={card.bookID} xs={12} sm={6} md={4}>
      <Card className={classes.card}>
        <CardMedia
          className={classes.cardMedia}
          image={card.Image}
          title={card.title}
          style={{ backgroundSize: 'contain' }}
        />
        <CardContent className={classes.cardContent}>
          <div className={classes.section}>
            <Grid container alignItems="center" spacing={2}>
              <Grid item xs={12} sm={9}>
                <Typography gutterBottom variant="h5" noWrap>
                  {card.title}
                </Typography>
              </Grid>
              <Grid item>
                <Typography gutterBottom variant="h6">
                  ₹{card.price}
                </Typography>
              </Grid>
            </Grid>
            <Typography color="textSecondary" variant="body2">
              {card.title}
            </Typography>
            <Typography
              color="textSecondary"
              variant="caption"
              align="right"
              component="div"
            >
              - {card.authors}
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
              value={card.average_rating}
              precision={0.5}
              readOnly
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <Typography color="textSecondary" variant="body2">
              Ratings
            </Typography>
            <Typography variant="subtitle2">{card.ratings_count}</Typography>
          </div>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary">
            View
          </Button>
          <Button size="small" color="primary">
            Add to cart
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
});
