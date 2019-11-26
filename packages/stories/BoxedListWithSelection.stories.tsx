import * as React from 'react';
import BoxedListWithSelection from '../@navikt/boxed-list-with-selection/src/BoxedListWithSelection';

export default { title: '@navikt/boxed-list-with-selection' };

export const normal = (): JSX.Element => (
    <BoxedListWithSelection
        items={[
            { name: 'Test 1', href: 'nav.no', selected: true },
            { name: 'Test 2', href: 'localhost:1234' },
        ]}
    />
);
