import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Cart container
export const initialState: ContainerState = {};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: cartActions, reducer, name: sliceKey } = cartSlice;