import { call, put, select, takeLatest } from 'redux-saga/effects';
import { bookActions } from './slice';
import { request } from 'utils/request';
import { IBookResponse, ISearchBookRequest } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { selectUser } from '../user/selectors';

/**
 * Search book
 * @param reqBody
 */

export function* searchBooks(reqBody: PayloadAction<ISearchBookRequest>) {
  const requestURL = `https://barclays-api-app.herokuapp.com/api/books/search`;
  try {
    const userData = yield select(selectUser);
    const books: IBookResponse = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(reqBody.payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.userInfo.token}`,
      },
    });
    if (books) {
      yield put(bookActions.searchBookSuccess(books));
    } else {
      yield put(bookActions.searchBookError('Signup Error'));
    }
  } catch (err) {
    yield put(bookActions.searchBookError('Signup Error'));
  }
}

export function* searchBookSaga() {
  yield takeLatest(bookActions.searchBook.type, searchBooks);
}
