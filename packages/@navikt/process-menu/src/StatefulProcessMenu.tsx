import * as React from 'react';
import { StepType } from './Step';
import ProcessMenu from './index';

interface StepProps {
    label: string;
    type?: StepType;
    ikonAltText?: string;
}

interface StatefulProcessMenuProps {
    steps: StepProps[];
    onClick?: (index: number) => void;
}
export const StatefulProcessMenu = ({ steps, onClick }: StatefulProcessMenuProps): JSX.Element => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleOnClick = (index: number): void => {
        setCurrentIndex(index);
        onClick(index);
    };

    const getStepsWithIndex = (): StepProps[] => {
        return steps.map((step, index) => {
            return {
                ...step,
                isActive: currentIndex === index,
                isFinished: currentIndex > index,
                isDisabled: currentIndex + 1 < index,
                type: currentIndex > index ? StepType.success : step.type,
            };
        });
    };
    return <ProcessMenu steps={getStepsWithIndex()} onClick={handleOnClick} />;
};

export default StatefulProcessMenu;
