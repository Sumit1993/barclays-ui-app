import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState } from './types';

// The initial state of the Landing container
export const initialState: ContainerState = {};

const landingSlice = createSlice({
  name: 'landing',
  initialState,
  reducers: {
    someAction(state, action: PayloadAction<any>) {},
  },
});

export const { actions: landingActions, reducer, name: sliceKey } = landingSlice;