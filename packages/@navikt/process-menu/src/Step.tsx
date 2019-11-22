import bem from '@navikt/bem-utils';
import classnames from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './stepStyles';
import StepIcon from './StepIcon';

export enum StepType {
    warning = 'warning',
    success = 'success',
    danger = 'danger',
    default = 'default',
}

interface StepProps {
    label: string;
    index: number;
    isFinished?: boolean;
    isActive?: boolean;
    isDisabled?: boolean;
    type?: StepType;
    onClick?: (index: number) => void;
    ikonAltText?: string;
}

const stepCls = bem('step');

export const Step = React.memo(
    ({
        label,
        index,
        isActive,
        onClick,
        isDisabled,
        isFinished,
        type = StepType.default,
        ikonAltText,
    }: StepProps): JSX.Element => {
        const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>): void => {
            event.preventDefault();
            onClick(index);
        };

        const stepIndicatorCls = classnames(stepCls.element('indicator', type), {
            [stepCls.element('indicator', 'active')]: isActive,
        });

        return (
            <li key={label.split(' ').join('')} className={stepCls.block} aria-current={isActive ? 'step' : undefined}>
                <button
                    className={stepCls.element('button', isActive ? 'active' : undefined)}
                    type="button"
                    onClick={handleButtonClick}
                >
                    <StepIcon type={type} isFinished={isFinished} ikonAltText={ikonAltText} />
                    <Normaltekst tag="span">{label}</Normaltekst>
                    <span className={stepIndicatorCls} />
                </button>
            </li>
        );
    }
);
export default Step;
