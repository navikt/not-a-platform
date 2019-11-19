import * as React from 'react';
import BoxedListWithSelection from '../@navikt/boxed-list-with-selection/src/BoxedListWithSelection';
import Header from '../@navikt/header/src/index';
import BoxedListWithLinks from '../@navikt/boxed-list-with-links/src/BoxedListWithLinks';
import Prosessmeny from '../@navikt/prosessmeny/src/index';
import Step from '../@navikt/prosessmeny/src/step';

export default { title: 'Examples' };

// export const applicationWrapper = () => (
//     <Header
//         title="Svangerskap og Fødsel"
//         userName="Navn Brukersen"
//         userUnit="NFP Drammen"
//         renderUserPopoverContent={(): React.ReactNode => (
//             <BoxedListWithSelection
//                 items={[
//                     {
//                         name: 'Test 1',
//                         href: 'nav.no',
//                         selected: true,
//                     },
//                     { name: 'Test 2', href: 'localhost:1234' },
//                 ]}
//             />
//         )}
//         renderLinksPopoverContent={(): React.ReactNode => (
//             <BoxedListWithLinks
//                 items={[
//                     { name: 'Test 1', href: 'nav.no' },
//                     { name: 'Test 2', href: 'localhost:1234' },
//                 ]}
//             />
//         )}
//     />
// );

export const prosessMeny = (): React.ReactNode => (
    <Prosessmeny
        steps={[
            {
                label: 'Inngangsvilkår',
            },
            {
                label: 'Beregning',
            },
            {
                label: 'Uttak',
                isManual: true,
            },
            {
                label: 'Tilkjent ytelse',
            },
            {
                label: 'Simulering',
                isDenied: true,
            },
            {
                label: 'Vedtak',
            },
        ]}
        onClick={(): void => null}
    />
    /* <Step label="Inngangsvilkår" isFinished />
        <Step label="Beregning" isFinished />
        <Step label="Uttak" isManual />
        <Step label="Tilkjent ytelse" />
        <Step label="Simulering" />
        <Step label="Vedtak" /> */
);
