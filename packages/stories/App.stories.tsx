import * as React from 'react';
import BoxedListWithSelection from '../@navikt/boxed-list-with-selection/src/BoxedListWithSelection';
import Header from '../@navikt/header/src/index';
import BoxedListWithLinks from '../@navikt/boxed-list-with-links/src/BoxedListWithLinks';
import Prosessmeny from '../@navikt/prosessmeny/src/index';
import Step, { StepType } from '../@navikt/prosessmeny/src/step';

export default { title: 'Examples' };

export const prosessMeny = (): React.ReactNode => (
    <Prosessmeny
        steps={[
            {
                label: 'Inngangsvilkår',
                type: StepType.success,
                isFinished: true,
            },
            {
                label: 'Beregning',
                type: StepType.success,
                isFinished: true,
            },
            {
                label: 'Uttak',
                type: StepType.warning,
                isFinished: true,
            },
            {
                label: 'Tilkjent ytelse',
                type: StepType.danger,
                isFinished: true,
            },
            {
                label: 'Simulering',
                type: StepType.default,
                isActive: true,
            },
            {
                label: 'Vedtak',
                type: StepType.default,
                isDisabled: true,
            },
        ]}
        onClick={(index: number): void => console.log(index)}
    />
);

export const applicationWrapper = () => (
    <Header
        title="Svangerskap og Fødsel"
        userName="Navn Brukersen"
        userUnit="NFP Drammen"
        renderUserPopoverContent={(): React.ReactNode => (
            <BoxedListWithSelection
                items={[
                    {
                        name: 'Test 1',
                        href: 'nav.no',
                        selected: true,
                    },
                    { name: 'Test 2', href: 'localhost:1234' },
                ]}
            />
        )}
        renderLinksPopoverContent={(): React.ReactNode => (
            <BoxedListWithLinks
                items={[
                    { name: 'Test 1', href: 'nav.no' },
                    { name: 'Test 2', href: 'localhost:1234' },
                ]}
            />
        )}
    />
);
