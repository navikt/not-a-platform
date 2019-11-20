import * as React from 'react';
import BoxedListWithSelection from '../@navikt/boxed-list-with-selection/src/BoxedListWithSelection';
import Header from '../@navikt/header/src/index';
import BoxedListWithLinks from '../@navikt/boxed-list-with-links/src/BoxedListWithLinks';

export default { title: 'Examples' };

export const applicationWrapper = () => (
    <Header
        title="Svangerskap og Fødsel"
        userName="Navn Brukersen"
        userUnit="NFP Drammen"
        renderUserPopoverContent={(): React.ReactNode => (
            <BoxedListWithSelection
                items={[
                    {
                        name: 'Test 1',
                        href: 'nav.no',
                        selected: true,
                    },
                    { name: 'Test 2', href: 'localhost:1234' },
                ]}
            />
        )}
        renderLinksPopoverContent={(): React.ReactNode => (
            <BoxedListWithLinks
                items={[
                    { name: 'Test 1', href: 'nav.no' },
                    { name: 'Test 2', href: 'localhost:1234' },
                ]}
            />
        )}
    />
);
