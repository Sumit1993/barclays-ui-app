import * as React from 'react';
import { render } from '@testing-library/react';

import { CartPrice } from '..';

describe('<CartPrice  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CartPrice />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
