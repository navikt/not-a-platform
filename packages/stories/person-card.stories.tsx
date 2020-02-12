import * as React from 'react';
import PersonCard from '../@navikt/person-card/src/index';

export default { title: '@navikt/nap-person-card' };

export const stateFromProps = (): JSX.Element => (
    <div style={{ marginBottom: '50px', display: 'flex' }}>
        <PersonCard
            name="Test Personsen"
            gender={'female' as const}
            fodselsnummer="12345612345"
            isActive
            url="#"
            renderMenuContent={(): JSX.Element => (
                <div>
                    <p>Hei</p>
                </div>
            )}
        />
        <PersonCard
            name="Pest Tersonsen"
            gender={'unknown' as const}
            fodselsnummer="12345612346"
            url="#"
            renderMenuContent={(): JSX.Element => (
                <div>
                    <p>Hallo</p>
                </div>
            )}
        />
    </div>
);
