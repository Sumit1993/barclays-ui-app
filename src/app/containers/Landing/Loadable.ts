/**
*
* Asynchronously loads the component for Landing
*
*/

import { lazyLoad } from 'utils/loadable';

export const Landing = lazyLoad(() => import('./index'), module => module.Landing);