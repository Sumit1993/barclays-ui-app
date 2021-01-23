import * as React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { Signin } from '..';

const renderComponent = () =>
  render(
      <HelmetProvider>
        <Signin  />
      </HelmetProvider>
  );

describe('<Signin />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
