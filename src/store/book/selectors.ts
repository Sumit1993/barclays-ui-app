import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from './slice';

const selectDomain = (state: RootState) => state.book || initialState;

export const selectBooks = createSelector(
  [selectDomain],
  bookState => bookState,
);
