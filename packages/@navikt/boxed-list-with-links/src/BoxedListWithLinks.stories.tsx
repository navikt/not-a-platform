import * as React from 'react';
import BoxedListWithLinks from './BoxedListWithLinks';

export default { title: '@navikt/boxed-list-with-links', component: BoxedListWithLinks };

export const normal = (): JSX.Element => (
    <BoxedListWithLinks
        items={[
            { name: 'Test 1', href: 'nav.no' },
            { name: 'Test 2', href: 'localhost:1234' },
        ]}
    />
);
