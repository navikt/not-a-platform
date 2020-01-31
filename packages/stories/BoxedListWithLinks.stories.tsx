import * as React from 'react';
import BoxedListWithLinks from '../@navikt/boxed-list-with-links/src/BoxedListWithLinks';

export default { title: '@navikt/boxed-list-with-links' };

export const normal = (): JSX.Element => (
    <BoxedListWithLinks
        items={[
            { name: 'Test 1', href: 'https://www.nav.no', isExternal: true },
            { name: 'Test 2', href: 'https://github.com/navikt/not-a-platform' },
        ]}
        onClick={index => {
            // eslint-disable-next-line no-alert
            alert(`Clicked index ${index}`);
        }}
    />
);
