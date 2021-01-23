/**
*
* Asynchronously loads the component for CartItems
*
*/

import { lazyLoad } from 'utils/loadable';

export const CartItems = lazyLoad(() => import('./index'), module => module.CartItems);