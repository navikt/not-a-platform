import * as React from 'react';
import BoxedListWithLinks from './BoxedListWithLinks';

export default { title: 'Boxed list with links' };

export const withLinks = () => (
  <BoxedListWithLinks items={[{ name: 'Test 1', href: 'nav.no' }, { name: 'Test 2', href: 'localhost:1234' }]} />
);
