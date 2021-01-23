import * as React from 'react';
import { render } from '@testing-library/react';

import { CartItems } from '..';

describe('<CartItems  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CartItems />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
