import * as React from 'react';
import { render } from '@testing-library/react';
import { HelmetProvider } from 'react-helmet-async';

import { NavBar } from '..';

const renderComponent = () =>
  render(
      <HelmetProvider>
        <NavBar  />
      </HelmetProvider>
  );

describe('<NavBar />', () => {
  it('should match the snapshot', () => {
    const component = renderComponent();
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
