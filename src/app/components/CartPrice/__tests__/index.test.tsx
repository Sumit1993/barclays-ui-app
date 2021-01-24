import * as React from 'react';
import { render } from '@testing-library/react';

import { CartPrice } from '..';

describe('<CartPrice  />', () => {
  it('should match snapshot', () => {
    const loadingIndicator = render(<CartPrice subTotal={10} />);
    expect(loadingIndicator.container.firstChild).toMatchSnapshot();
  });
});
