import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, IAddCartRequest, ICartResponse } from './types';

// The initial state of the Cart container
export const initialState: ContainerState = { loading: false, error: null };

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action: PayloadAction<IAddCartRequest>) {
      state.loading = true;
      state.error = null;
    },
    addItemSuccess(state, action: PayloadAction<ICartResponse>) {
      state.cartInfo = action.payload;
      state.loading = false;
    },
    addItemError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
    getCart(state) {
      state.loading = true;
      state.error = null;
    },
    getCartSuccess(state, action: PayloadAction<ICartResponse>) {
      state.cartInfo = action.payload;
      state.loading = false;
    },
    getCartError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: cartActions, reducer, name: sliceKey } = cartSlice;
