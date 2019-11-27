import * as React from 'react';
import ProcessMenu from '../@navikt/process-menu/src/index';
import { StepType } from '../@navikt/process-menu/src/Step';
import StatefulProcessMenu from '../@navikt/process-menu/src/StatefulProcessMenu';

export default { title: '@navikt/nap-process-menu' };

export const stateFromProps = (): React.ReactNode => (
    <ProcessMenu
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
                isActive: true,
            },
            {
                label: 'Uttak',
                type: StepType.warning,
            },
            {
                label: 'Tilkjent ytelse',
                type: StepType.danger,
            },
            {
                label: 'Simulering',
                type: StepType.default,
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

export const stateful = (): React.ReactNode => (
    <StatefulProcessMenu
        steps={[
            {
                label: 'Inngangsvilkår',
            },
            {
                label: 'Beregning',
            },
            {
                label: 'Uttak',
                type: StepType.warning,
            },
            {
                label: 'Tilkjent ytelse',
            },
            {
                label: 'Simulering',
                type: StepType.danger,
            },
            {
                label: 'Vedtak',
            },
        ]}
        onClick={(index: number): void => console.log(index)}
    />
);

export const manySteps = (): React.ReactNode => (
    <StatefulProcessMenu
        steps={[
            {
                label: 'Inngangsvilkår',
            },
            {
                label: 'Beregning',
            },
            {
                label: 'Uttak',
                type: StepType.warning,
            },
            {
                label: 'Tilkjent ytelse',
            },
            {
                label: 'Simulering',
                type: StepType.danger,
            },
            {
                label: 'Vedtak',
            },
            {
                label: 'Inngangsvilkår2',
            },
            {
                label: 'Beregning2',
            },
            {
                label: 'Uttak2',
                type: StepType.warning,
            },
            {
                label: 'Tilkjent ytelse2',
            },
            {
                label: 'Simulering2',
                type: StepType.danger,
            },
            {
                label: 'Vedtak2',
            },
        ]}
        onClick={(index: number): void => console.log(index)}
    />
);
