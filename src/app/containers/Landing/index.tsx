/**
 *
 * Landing
 *
 */

import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { useSelector, useDispatch } from 'react-redux';

import { useInjectReducer, useInjectSaga } from 'utils/redux-injectors';
import { reducer, sliceKey } from './slice';
import { selectLanding } from './selectors';
import { landingSaga } from './saga';
import { messages } from './messages';
import { Grid } from '@material-ui/core';
import { BookCard } from '../../components/Card/Loadable';

interface Props {}

export function Landing(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: landingSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const landing = useSelector(selectLanding);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

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
      <Grid container spacing={4}>
        {cards.map(card => (
          <BookCard {...{ card }} />
        ))}
      </Grid>
    </>
  );
}
