/**
*
* Asynchronously loads the component for EmptyCart
*
*/

import { lazyLoad } from 'utils/loadable';

export const EmptyCart = lazyLoad(() => import('./index'), module => module.EmptyCart);