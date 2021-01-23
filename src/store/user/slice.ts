import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import {
  ContainerState,
  ISigninRequest,
  ISignupRequest,
  IUserResponse,
} from './types';

// The initial state of the Home container
export const initialState: ContainerState = { loading: false, error: null };

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    signupUser(state, action: PayloadAction<ISignupRequest>) {
      state.loading = true;
      state.error = null;
    },
    signupUserSuccess(state, action: PayloadAction<IUserResponse>) {
      const {
        user: { email, name },
        token,
      } = action.payload;
      state.userInfo = { email, name, token };
      state.loading = false;
    },
    signupUserError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    signinUser(state, action: PayloadAction<ISigninRequest>) {
      state.loading = true;
      state.error = null;
    },
    signinUserSuccess(state, action: PayloadAction<IUserResponse>) {
      const {
        user: { email, name },
        token,
      } = action.payload;
      state.userInfo = { email, name, token };
      state.loading = false;
    },
    signinUserError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    logoutUser(state) {
      state.loading = true;
      state.error = null;
    },
    logoutUserSuccess(state, action: PayloadAction<IUserResponse>) {
      Reflect.deleteProperty(state, 'userInfo');
      state.loading = false;
    },
    logoutUserError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: userActions, reducer, name: sliceKey } = userSlice;
