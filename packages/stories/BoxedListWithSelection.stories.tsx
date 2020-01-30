import * as React from 'react';
import BoxedListWithSelection from '../@navikt/boxed-list-with-selection/src/BoxedListWithSelection';

export default { title: '@navikt/boxed-list-with-selection' };

export const normal: React.FunctionComponent = (): JSX.Element => (
    <BoxedListWithSelection
        items={[
            { name: 'Test 1', href: 'nav.no', selected: true },
            { name: 'Test 2', href: 'localhost:1234' },
            { name: 'Test 2' },
        ]}
        // eslint-disable-next-line no-alert
        onClick={(index: number) => alert(`clicked index ${index}`)}
    />
);
