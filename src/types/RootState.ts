import { LandingState } from 'app/containers/Landing/types';
import { CartState } from 'app/containers/Cart/types';
// [IMPORT NEW CONTAINERSTATE ABOVE] < Needed for generating containers seamlessly

/* 
  Because the redux-injectors injects your reducers asynchronously somewhere in your code
  You have to declare them here manually
*/
export interface RootState {
  landing?: LandingState;
  cart?: CartState;
  // [INSERT NEW REDUCER KEY ABOVE] < Needed for generating containers seamlessly
}
