import * as React from 'react';
import { render } from '@testing-library/react';

import { CartItem } from '..';

describe('<CartItem  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CartItem {...{ item: 'a' }} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
