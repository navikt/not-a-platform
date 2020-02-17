import * as React from 'react';
import Autocomplete from '../@navikt/autocomplete/src/Autocomplete';

export default { title: '@navikt/nap-autocomplete' };

const values = [
    { key: 'v1', value: 'Value 1' },
    { key: 'v2', value: 'Value 2' },
    { key: 'v3', value: 'Value 3' },
];

export const normal: React.FunctionComponent = (): JSX.Element => (
    <Autocomplete
        ariaLabel="test"
        id="test"
        onChange={e => {
            // eslint-disable-next-line no-console
            console.log('change event', e);
        }}
        onSelect={e => {
            // eslint-disable-next-line no-console
            console.log('select event', e);
        }}
        placeholder="Placeholder"
        suggestions={values}
        value={values[0].value}
    />
);
