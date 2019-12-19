import * as React from 'react';
import BoxedListWithSelection from '../@navikt/boxed-list-with-selection/src/BoxedListWithSelection';

export default { title: '@navikt/boxed-list-with-selection' };

export const withAnchors = (): JSX.Element => (
    <BoxedListWithSelection
        items={[
            { name: 'Test 1', href: 'nav.no', selected: true },
            { name: 'Test 2', href: 'localhost:1234' },
        ]}
    />
);

export const withButtons = (): JSX.Element => (
    <BoxedListWithSelection
        items={[
            { name: 'Test 1', selected: true, callback: (index: number) => console.log(index) },
            { name: 'Test 2', callback: (index: number) => console.log(index) },
        ]}
    />
);

export const missingHrefAndCallback = (): JSX.Element => (
    <BoxedListWithSelection items={[{ name: 'Test 1', selected: true }, { name: 'Test 2' }]} />
);
