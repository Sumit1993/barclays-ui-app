/**
 *
 * Landing
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';
import styled from 'styled-components/macro';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectLanding } from './selectors';
import { landingSaga } from './saga';
import { messages } from './messages';
import {
  Container,
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  makeStyles,
  Divider,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';

interface Props {}

const useStyles = makeStyles(theme => ({
  icon: {
    marginRight: theme.spacing(2),
  },
  heroContent: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(8, 0, 6),
  },
  heroButtons: {
    marginTop: theme.spacing(4),
  },
  cardGrid: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(6),
  },
  section: {
    margin: theme.spacing(2, 0),
  },
}));

export function Landing(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: landingSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const landing = useSelector(selectLanding);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

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
    <>
      <Helmet>
        <title>Landing</title>
        <meta name="description" content="Description of Landing" />
      </Helmet>
      <Container className={classes.cardGrid} maxWidth="md">
        {/* End hero unit */}
        <Grid container spacing={4}>
          {cards.map(card => (
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
                  <div
                    style={{ display: 'flex', justifyContent: 'space-between' }}
                  >
                    <Typography color="textSecondary" variant="body2">
                      Ratings
                    </Typography>
                    <Typography variant="subtitle2">
                      {card.ratings_count}
                    </Typography>
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
          ))}
        </Grid>
      </Container>
    </>
  );
}
