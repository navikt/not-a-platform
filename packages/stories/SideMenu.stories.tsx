import * as React from 'react';
import SideMenu from '../@navikt/side-menu/src/index';
import StatefulSideMenu from '../@navikt/side-menu/src/StatefulSideMenu';

export default { title: '@navikt/nap-side-menu' };

/* eslint-disable global-require */
const advarselImgPath = require('./assets/images/advarsel.svg') as string;
/* eslint-enable global-require */

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

export const statefulWithIcons = (): React.ReactNode => (
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
                iconSrc: advarselImgPath,
                iconAltText: 'Advarsel',
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

export const arrowTheme = (): React.ReactNode => (
    <SideMenu
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
        ].map((link, index) => ({
            active: index === 3,
            label: link.label,
        }))}
        heading="Perioder"
        onClick={() => null}
        arrowTheme
    />
);
