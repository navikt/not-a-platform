import * as React from 'react';
import ProcessMenu from './index';
import { StepType } from './Step';

export default { title: '@navikt/process-menu' };

export const withStates = (): React.ReactNode => (
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
