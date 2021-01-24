import { CartState } from 'store/cart/types';
import { UserState } from '../store/user/types';
import { BookState } from '../store/book/types';
export interface RootState {
  cart?: CartState;
  user: UserState;
  book: BookState;
}
