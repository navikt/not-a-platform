import * as React from 'react';
import BoxedListWithLinks from '../@navikt/boxed-list-with-links/src/BoxedListWithLinks';

export default { title: '@navikt/boxed-list-with-links' };

export const normal = (): JSX.Element => (
    <BoxedListWithLinks
        items={[
            { name: 'Test 1', href: 'nav.no' },
            { name: 'Test 2', href: 'localhost:1234' },
        ]}
    />
);
