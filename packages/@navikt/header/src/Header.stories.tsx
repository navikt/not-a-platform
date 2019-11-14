import * as React from 'react';
import Header from './index';

export default { title: '@navikt/header' };

export const normal = () => <Header title="Svangerskap og Fødsel" userName="Navn Brukersen" userUnit="NFP Drammen" />;
export const withUserPopover = () => (
    <Header
        title="Svangerskap og Fødsel"
        userName="Navn Brukersen"
        userUnit="NFP Drammen"
        renderUserPopoverContent={(): React.ReactNode => <div>Test</div>}
    />
);
