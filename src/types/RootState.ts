import { LandingState } from 'app/containers/Landing/types';
import { CartState } from 'app/containers/Cart/types';
import { UserState } from '../store/user/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  landing?: LandingState;
  cart?: CartState;
  user?: UserState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
