import * as React from 'react';
import Header from '@navikt/header';
import BoxedListWithLinks from '@navikt/boxed-list-with-links';
import BoxedListWithSelection from '@navikt/boxed-list-with-selection';

const ApplicationWrapper: React.FunctionComponent = ({ children }) => (
    <Header
        title="Svangerskap og Fødsel"
        userName="Navn Brukersen"
        userUnit="NFP Drammen"
        renderUserPopoverContent={() => (
            <BoxedListWithSelection
                items={[
                    { name: 'Test 1', href: 'nav.no', selected: true },
                    { name: 'Test 2', href: 'localhost:1234' },
                ]}
            />
        )}
        renderLinksPopoverContent={() => (
            <BoxedListWithLinks
                items={[
                    { name: 'Test 1', href: 'nav.no' },
                    { name: 'Test 2', href: 'localhost:1234' },
                ]}
            />
        )}
    />
);

export default ApplicationWrapper;
