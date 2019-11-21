import bem from '@navikt/bem-utils';
import * as React from 'react';
import './indexStyles';
import Step, { StepType } from './Step';

interface StepProps {
    label: string;
    type?: StepType;
    isActive?: boolean;
    isFinished?: boolean;
    isDisabled?: boolean;
    ikonAltText?: string;
}

interface ProcessMenuProps {
    /**
     * label: string;
    type?: StepType ('warning' | 'success' | 'danger' | 'default');
    isActive?: boolean;
    isFinished?: boolean;
    isDisabled?: boolean;
     */
    steps: StepProps[];
    onClick?: (index: number) => void;
}

const processMenuCls = bem('process-menu');

export const ProcessMenu = ({ steps, onClick }: ProcessMenuProps): JSX.Element => {
    return (
        <ol className={processMenuCls.block}>
            {steps.map((step, index) => (
                <Step key={step.label.split(' ').join('')} index={index} onClick={onClick} {...step} />
            ))}
        </ol>
    );
};
export default ProcessMenu;
