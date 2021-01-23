/**
 *
 * Asynchronously loads the component for Card
 *
 */

import { lazyLoad } from 'utils/loadable';

export const BookCard = lazyLoad(
  () => import('./index'),
  module => module.BookCard,
);
