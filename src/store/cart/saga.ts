import { PayloadAction } from '@reduxjs/toolkit';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from '../../utils/request';
import { selectUser } from '../user/selectors';
import { cartActions } from './slice';
import { IAddCartRequest, ICartResponse } from './types';

/**
 * Add cart item
 * @param reqBody
 */

export function* addCartItem(reqBody: PayloadAction<IAddCartRequest>) {
  const requestURL = `http://localhost:3000/api/cart/addItem`;
  try {
    const userData = yield select(selectUser);
    const user: ICartResponse = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(reqBody.payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.userInfo.token}`,
      },
    });
    if (user) {
      yield put(cartActions.addItemSuccess(user));
    } else {
      yield put(cartActions.addItemError('Signup Error'));
    }
  } catch (err) {
    yield put(cartActions.addItemError('Signup Error'));
  }
}

export function* addCartSaga() {
  yield takeLatest(cartActions.addItem.type, addCartItem);
}

/**
 * Get cart
 * @param reqBody
 */

export function* getCart() {
  const requestURL = `http://localhost:3000/api/cart/getAll`;
  try {
    const userData = yield select(selectUser);
    const user: ICartResponse = yield call(request, requestURL, {
      headers: {
        Authorization: `Bearer ${userData.userInfo.token}`,
      },
    });
    if (user) {
      yield put(cartActions.getCartSuccess(user));
    } else {
      yield put(cartActions.getCartError('Logout Error'));
    }
  } catch (err) {
    yield put(cartActions.getCartError('Logout Error'));
  }
}

export function* getCartSaga() {
  yield takeLatest(cartActions.getCart.type, getCart);
}