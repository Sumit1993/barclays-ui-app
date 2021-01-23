/**
*
* Asynchronously loads the component for CartItem
*
*/

import { lazyLoad } from 'utils/loadable';

export const CartItem = lazyLoad(() => import('./index'), module => module.CartItem);