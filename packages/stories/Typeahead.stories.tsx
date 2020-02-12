import * as React from 'react';
import Typeahead from '../@navikt/typeahead/src/index';
import { Suggestion } from '../@navikt/typeahead/src/Typeahead';

export default { title: '@navikt/typeahead' };

const TypeaheadWithState = () => {
    const [sokestreng, setSokestreng] = React.useState('');
    const suggestions = [
        {
            key: 'Hallvard',
            value: 'Hallvard',
        },
        {
            key: 'Erlend',
            value: 'Erlend',
        },
    ];
    return (
        <Typeahead
            value={sokestreng}
            suggestions={suggestions}
            onChange={(verdi: string) => setSokestreng(verdi)}
            onSelect={(verdi: Suggestion) => console.log(verdi)}
            placeholder="Placeholder"
            id="searchbox"
            ariaLabel="Søk"
        />
    );
};

export const popover = () => <TypeaheadWithState />;
