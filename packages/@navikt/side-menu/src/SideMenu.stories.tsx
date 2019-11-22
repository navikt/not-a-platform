import * as React from 'react';
import SideMenu from './index';
import StatefulSideMenu from './StatefulSideMenu';

export default { title: '@navikt/side-menu' };

export const propsControlled = (): React.ReactNode => (
    <SideMenu
        heading="Fakta om"
        links={[
            {
                label: 'Sykmeldingsperiode',
            },
            {
                label: 'Sykdomsvilkår',
            },
            {
                label: 'Inngangsvilkår',
            },
            {
                label: 'Inntektskilder',
            },
            {
                label: 'Sykepengegrunnlag',
            },
            {
                label: 'Fordeling',
            },
            {
                label: 'Utbetalingsoversikt',
            },
            {
                label: 'Oppsummering',
            },
        ]}
        onClick={() => null}
    />
);

export const stateful = (): React.ReactNode => (
    <StatefulSideMenu
        heading="Fakta om"
        links={[
            {
                label: 'Sykmeldingsperiode',
            },
            {
                label: 'Sykdomsvilkår',
            },
            {
                label: 'Inngangsvilkår',
            },
            {
                label: 'Inntektskilder',
            },
            {
                label: 'Sykepengegrunnlag',
            },
            {
                label: 'Fordeling',
            },
            {
                label: 'Utbetalingsoversikt',
            },
            {
                label: 'Oppsummering',
            },
        ]}
        onClick={() => null}
    />
);
