import * as React from 'react';
import Decorator from '@navikt/decorator';
import BoxedListWithLinks from '@navikt/boxed-list-with-links';
import BoxedListWithSelection from '@navikt/boxed-list-with-selection';
import Queue from '../decorator/components/queue/queue';

const ApplicationWrapper: React.FunctionComponent = ({ children }) => (
    <Decorator
        title="Svangerskap og Fødsel"
        userName="Navn Brukersen"
        userUnit="NFP Drammen"
        renderUserPopoverContent={() => (
            <BoxedListWithSelection
                items={[{ name: 'Test 1', href: 'nav.no' }, { name: 'Test 2', href: 'localhost:1234' }]}
            />
        )}
        renderLinksPopoverContent={() => (
            <BoxedListWithLinks
                items={[{ name: 'Test 1', href: 'nav.no' }, { name: 'Test 2', href: 'localhost:1234' }]}
            />
        )}
        renderSearchLink={() => <Queue href="nav.no" numberOfQueuedTasks={12} />}
    >
        {children}
    </Decorator>
);

export default ApplicationWrapper;
