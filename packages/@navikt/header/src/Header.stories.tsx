import * as React from 'react';
import Header from './index';

export default { title: '@navikt/nap-header' };

export const normal = () => <Header title="Svangerskap og Fødsel" userName="Navn Brukersen" />;
export const withUnit = () => <Header title="Svangerskap og Fødsel" userName="Navn Brukersen" userUnit="NFP Drammen" />;
export const withUserPopover = () => (
    <Header
        title="Svangerskap og Fødsel"
        userName="Navn Brukersen"
        userUnit="NFP Drammen"
        renderUserPopoverContent={(): React.ReactNode => <div>Test</div>}
    />
);
