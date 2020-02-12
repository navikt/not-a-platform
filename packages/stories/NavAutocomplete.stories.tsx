import * as React from 'react';
import NavAutocomplete from '../@navikt/nav-autocomplete/src/index';
import { Suggestion } from '../@navikt/nav-autocomplete/src/NavAutcomplete';

export default { title: '@navikt/nap-navautocomplete', component: NavAutocomplete };

export const Example = () => {
    const suggestions = [
        {
            key: '0',
            value: 'Hallvard',
        },
        {
            key: '1',
            value: 'Erlend',
        },
    ];
    return (
        /* eslint-disable no-console */
        <NavAutocomplete
            suggestions={suggestions}
            onSelect={(verdi: Suggestion) => console.log(verdi)}
            placeholder="Placeholder"
            id="searchbox"
            ariaLabel="Søk"
            onReset={() => console.log('reset')}
        />
        /* eslint-enable no-console */
    );
};
