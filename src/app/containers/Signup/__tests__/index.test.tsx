import * as React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { Signup } from '..';

const renderComponent = () =>
  render(
      <HelmetProvider>
        <Signup  />
      </HelmetProvider>
  );

describe('<Signup />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
