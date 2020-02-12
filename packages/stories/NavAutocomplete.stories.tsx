import * as React from 'react';
import { NavAutocomplete, Suggestion } from '../@navikt/nav-autocomplete/src/NavAutcomplete';

export default { title: '@navikt/nap-navautocomplete' };

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
/* eslint-disable no-console */
export const Example = () => (
    <NavAutocomplete
        suggestions={suggestions}
        onSelect={(verdi: Suggestion) => console.log(verdi)}
        placeholder="Placeholder"
        id="searchbox"
        ariaLabel="Søk"
        onReset={() => console.log('reset')}
    />
);
/* eslint-enable no-console */
