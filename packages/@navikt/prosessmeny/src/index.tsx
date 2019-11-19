import bem from '@navikt/bem-utils';
import * as React from 'react';
import './indexStyles';
import Step from './step';

interface StepProps {
    label: string;
    isManual?: boolean;
    isDenied?: boolean;
}

interface ProsessmenyProps {
    steps: StepProps[];
    onClick?: () => void;
}

const prosessmenyCls = bem('prosessmeny');

export const Prosessmeny = ({ steps, onClick }: ProsessmenyProps): JSX.Element => {
    const [activeIndex, setActiveIndex] = React.useState(0);

    const handleClick = (index: number): void => {
        setActiveIndex(index);
        onClick();
    };

    return (
        <ol className={prosessmenyCls.block}>
            {steps.map((step, index) => (
                <Step
                    key={step.label.split(' ').join('')}
                    index={index}
                    isFinished={index < activeIndex}
                    isActive={index === activeIndex}
                    isDisabled={index > activeIndex + 1}
                    onClick={handleClick}
                    {...step}
                />
            ))}
        </ol>
    );
};
export default Prosessmeny;
