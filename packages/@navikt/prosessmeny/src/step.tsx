import bem from '@navikt/bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './stepStyles';

interface StepProps {
    label: string;
    index: number;
    isFinished?: boolean;
    isManual?: boolean;
    isActive?: boolean;
    isDenied?: boolean;
    isDisabled?: boolean;
    onClick?: (index: number) => void;
}

const stepCls = bem('step');

export const Step = ({
    label,
    index,
    isFinished,
    isManual,
    isActive,
    onClick,
    isDenied,
    isDisabled,
}: StepProps): JSX.Element => {
    const [stepIsFinished, setStepIsFinished] = React.useState(false);

    React.useEffect(() => {
        if (!stepIsFinished && isFinished) {
            setStepIsFinished(true);
        }
    });

    const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        onClick(index);
    };
    const getModifierClass = (): string => {
        if (stepIsFinished) {
            return 'finished';
        }
        if (isManual) {
            return 'manual';
        }
        if (isDenied) {
            return 'denied';
        }
        return '';
    };
    let statusCls = stepCls.element('indicator', getModifierClass());
    if (isActive) {
        statusCls = statusCls.concat(' -active');
    }

    return (
        <li key={label} className={stepCls.block} aria-current={isActive ? 'step' : undefined}>
            <button
                className={stepCls.element('button', getModifierClass())}
                type="button"
                onClick={handleButtonClick}
                disabled={isDisabled && !stepIsFinished}
            >
                <Normaltekst tag="span">{label}</Normaltekst>
                <span className={statusCls} />
            </button>
        </li>
    );
};
export default Step;
