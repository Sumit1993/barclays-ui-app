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
import { messages } from './messages';
import { Box, Grid } from '@material-ui/core';
import { BookCard } from '../../components/Card/Loadable';
import { reducer, sliceKey } from '../../../store/book/slice';
import { searchBookSaga } from '../../../store/book/saga';
import { selectBooks } from '../../../store/book/selectors';
import { IBookInfo } from '../../../store/book/types';

interface Props {}

export function Landing(props: Props) {
  useInjectReducer({ key: sliceKey, reducer: reducer });
  useInjectSaga({ key: sliceKey, saga: searchBookSaga });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const booksState = useSelector(selectBooks);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const dispatch = useDispatch();

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { t, i18n } = useTranslation();

  const [books, setBooks] = React.useState<IBookInfo[]>([]);

  React.useEffect(() => {
    if (booksState.books.length > 0) {
      setBooks(booksState.books);
    }
  }, [booksState]);

  return (
    <>
      <Helmet>
        <title>Landing</title>
        <meta name="description" content="Description of Landing" />
      </Helmet>
      <Grid container spacing={4}>
        {books.map(book => (
            <BookCard key={book.bookID} {...{ book }} />
        ))}
      </Grid>
    </>
  );
}
