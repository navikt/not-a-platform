import * as React from 'react';
import BoxedListWithSelection from './BoxedListWithSelection';

export default { title: 'Boxed list with selection' };

export const withLinks = () => (
  <BoxedListWithSelection
    items={[{ name: 'Test 1', href: 'nav.no', selected: true }, { name: 'Test 2', href: 'localhost:1234' }]}
  />
);
