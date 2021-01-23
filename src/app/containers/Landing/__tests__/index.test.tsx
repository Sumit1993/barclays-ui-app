import * as React from 'react';
import { render } from '@testing-library/react';
import { Store } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { HelmetProvider } from 'react-helmet-async';

import { configureAppStore } from 'store/configureStore';
import { Landing } from '..';

const renderComponent = (store: Store) =>
  render(
    <Provider store={store}>
      <HelmetProvider>
        <Landing  />
      </HelmetProvider>
    </Provider>
  );

describe('<Landing />', () => {
  let store: ReturnType<typeof configureAppStore>;
  
  beforeEach(() => {
    store = configureAppStore();
  });
  it('should match the snapshot', () => {
    const component = renderComponent(store.store);
    expect(component.container.firstChild).toMatchSnapshot();
  });
});
