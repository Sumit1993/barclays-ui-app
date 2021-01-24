import * as React from 'react';
import { render } from '@testing-library/react';

import { BookCard } from '..';

describe('<BookCard  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <BookCard
        book={{
          _id: '1',
          bookID: 1,
          title: 'Harry Potter and the Half-Blood Prince (Harry Potter  #6)',
          authors: 'J.K. Rowling-Mary GrandPré',
          average_rating: 4.56,
          isbn: 439785960,
          language_code: 'eng',
          ratings_count: 1944099,
          price: 230,
          Image:
            'https://s3-ap-southeast-1.amazonaws.com/he-public-data/blue-book-reading-hid3b6f09.png',
        }}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
