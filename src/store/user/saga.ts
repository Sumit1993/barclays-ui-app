import { call, put, select, takeLatest } from 'redux-saga/effects';
import { userActions } from './slice';
import { request } from 'utils/request';
import { ISigninRequest, ISignupRequest, IUserResponse } from './types';
import { PayloadAction } from '@reduxjs/toolkit';
import { selectUser } from './selectors';

/**
 * Signup
 * @param reqBody
 */

export function* signupUser(reqBody: PayloadAction<ISignupRequest>) {
  const requestURL = `http://localhost:3000/api/auth/signup`;
  try {
    const user: IUserResponse = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(reqBody.payload),
      headers: { 'Content-Type': 'application/json' },
    });
    if (user) {
      yield put(userActions.signupUserSuccess(user));
    } else {
      yield put(userActions.signupUserError('Signup Error'));
    }
  } catch (err) {
    yield put(userActions.signupUserError('Signup Error'));
  }
}

export function* signupSaga() {
  yield takeLatest(userActions.signupUser.type, signupUser);
}

/**
 * Signin
 * @param reqBody
 */

export function* signinUser(reqBody: PayloadAction<ISigninRequest>) {
  const requestURL = `http://localhost:3000/api/auth/signin`;
  try {
    const user: IUserResponse = yield call(request, requestURL, {
      method: 'post',
      body: JSON.stringify(reqBody.payload),
      headers: { 'Content-Type': 'application/json' },
    });
    if (user) {
      yield put(userActions.signinUserSuccess(user));
    } else {
      yield put(userActions.signinUserError('Signin Error'));
    }
  } catch (err) {
    yield put(userActions.signinUserError('Signin Error'));
  }
}

export function* signinSaga() {
  yield takeLatest(userActions.signinUser.type, signinUser);
}

/**
 * Logout
 * @param reqBody
 */

export function* logoutUser(reqBody) {
  const requestURL = `http://localhost:3000/api/auth/logout`;
  try {
    const userInfo = yield select(selectUser);
    const user: IUserResponse = yield call(request, requestURL, {
      headers: {
        Authorization: `Bearer ${userInfo.token}`,
      },
    });
    if (user) {
      yield put(userActions.logoutUserSuccess(user));
    } else {
      yield put(userActions.logoutUserError('Logout Error'));
    }
  } catch (err) {
    yield put(userActions.logoutUserError('Logout Error'));
  }
}

export function* logoutSaga() {
  yield takeLatest(userActions.logoutUser.type, logoutUser);
}
