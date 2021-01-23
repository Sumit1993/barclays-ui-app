/**
*
* Asynchronously loads the component for CartPrice
*
*/

import { lazyLoad } from 'utils/loadable';

export const CartPrice = lazyLoad(() => import('./index'), module => module.CartPrice);