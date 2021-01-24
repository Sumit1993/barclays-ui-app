import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { ContainerState, IBookResponse, ISearchBookRequest } from './types';

// The initial state of the Home container
export const initialState: ContainerState = {
  books: [],
  loading: false,
  error: null,
};

const bookSlice = createSlice({
  name: 'book',
  initialState,
  reducers: {
    searchBook(state, action: PayloadAction<ISearchBookRequest>) {
      state.loading = true;
      state.error = null;
    },
    searchBookSuccess(state, action: PayloadAction<IBookResponse>) {
      state.books = action.payload.docs;
      Reflect.deleteProperty(action.payload, 'docs');
      state.pagination = action.payload;
      state.loading = false;
    },
    searchBookError(state, action: PayloadAction<any>) {
      state.error = action.payload;
      state.loading = false;
    },
  },
});

export const { actions: bookActions, reducer, name: sliceKey } = bookSlice;
