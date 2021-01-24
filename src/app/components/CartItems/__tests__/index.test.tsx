import * as React from 'react';
import { render } from '@testing-library/react';

import { CartItems } from '..';

describe('<CartItems  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(
      <CartItems
        items={[
          {
            bookID: 2,
            price: 231,
            quantity: 1,
            total: 231,
            Image:
              'https://s3-ap-southeast-1.amazonaws.com/he-public-data/2511916-orange-book-cartoon6cc76e1.jpeg',
            authors: 'Sumit',
            title: 'Sumit',
          },
        ]}
      />,
    );
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
