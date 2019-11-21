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
}

interface ProsessmenyProps {
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

const prosessmenyCls = bem('prosessmeny');

export const Prosessmeny = ({ steps, onClick }: ProsessmenyProps): JSX.Element => {
    return (
        <ol className={prosessmenyCls.block}>
            {steps.map((step, index) => (
                <Step key={step.label.split(' ').join('')} index={index} onClick={onClick} {...step} />
            ))}
        </ol>
    );
};
export default Prosessmeny;
