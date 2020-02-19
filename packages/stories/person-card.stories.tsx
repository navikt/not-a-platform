import * as React from 'react';
import { PersonCard, EmptyPersonCard } from '../@navikt/person-card/src/index';

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
            renderLabelContent={() => (
                <div
                    style={{
                        width: '70px',
                        height: '24px',
                        background: 'rgb(198, 194, 191)',
                        borderRadius: '4px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        color: 'rgb(62, 56, 50)',
                        fontFamily: 'SourceSansPro-Regular',
                        fontSize: '14px',
                        fontWeight: 'normal',
                        lineHeight: '24px',
                    }}
                >
                    Under 18
                </div>
            )}
        />
        <EmptyPersonCard namePlaceholder="Ukjent navn, mangler norsk id-nr" />
    </div>
);
