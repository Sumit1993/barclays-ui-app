import * as React from 'react';
import { render } from '@testing-library/react';

import { EmptyCart } from '..';

describe('<EmptyCart  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<EmptyCart />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
