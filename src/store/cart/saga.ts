import { PayloadAction } from '@reduxjs/toolkit';
import { StringifyOptions } from 'querystring';
import { call, put, select, takeLatest } from 'redux-saga/effects';
import { request } from '../../utils/request';
import { selectUser } from '../user/selectors';
import { cartActions } from './slice';
import { IAddCartRequest, ICartResponse, IPlaceOrderRequest } from './types';

/**
 * Add cart item
 * @param reqBody
 */

export function* addCartItem(reqBody: PayloadAction<IAddCartRequest>) {
  const requestURL = `https://barclays-api-app.herokuapp.com/api/cart/addItem`;
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
  const requestURL = `https://barclays-api-app.herokuapp.com/api/cart/getAll`;
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

/**
 * Get cart
 * @param reqBody
 */

export function* placeOrder(reqBody: PayloadAction<IPlaceOrderRequest>) {
  const requestURL = `https://barclays-api-app.herokuapp.com/api/cart/placeOrder`;
  try {
    const userData = yield select(selectUser);
    const resp: { url: string } = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(reqBody.payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.userInfo.token}`,
      },
    });
    yield put(cartActions.placeOrderSuccess(resp.url));
  } catch (err) {
    yield put(cartActions.placeOrderError('Logout Error'));
  }
}

export function* placeOrderSaga() {
  yield takeLatest(cartActions.placeOrder.type, placeOrder);
}
/**
 * Get cart
 * @param reqBody
 */

export function* removeItem(reqBody: PayloadAction<IPlaceOrderRequest>) {
  const requestURL = `https://barclays-api-app.herokuapp.com/api/cart/removeItem`;
  try {
    const userData = yield select(selectUser);
    const resp: ICartResponse = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(reqBody.payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.userInfo.token}`,
      },
    });
    if (resp) {
      yield put(cartActions.removeItemSuccess(resp));
    } else {
      yield put(cartActions.removeItemError('Signup Error'));
    }
  } catch (err) {
    yield put(cartActions.removeItemError('Logout Error'));
  }
}

export function* removeItemSaga() {
  yield takeLatest(cartActions.removeItem.type, removeItem);
}
/**
 * Get cart
 * @param reqBody
 */

export function* updateQuantity(reqBody: PayloadAction<IPlaceOrderRequest>) {
  const requestURL = `https://barclays-api-app.herokuapp.com/api/cart/updateQuantiy`;
  try {
    const userData = yield select(selectUser);
    const resp: ICartResponse = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(reqBody.payload),
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${userData.userInfo.token}`,
      },
    });
    if (resp) {
      yield put(cartActions.updateQuantitySuccess(resp));
    } else {
      yield put(cartActions.updateQuantityError('Signup Error'));
    }
  } catch (err) {
    yield put(cartActions.updateQuantityError('Logout Error'));
  }
}

export function* updateQuantitySaga() {
  yield takeLatest(cartActions.updateQuantity.type, updateQuantity);
}
