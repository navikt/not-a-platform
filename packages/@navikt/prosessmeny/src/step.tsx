import bem from '@navikt/bem-utils';
import classnames from 'classnames';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import advarselImg from '../assets/images/advarsel.svg';
import avslaatImg from '../assets/images/avslaatt_valgt.svg';
import checkImg from '../assets/images/check.svg';
import './stepStyles';

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
}

const stepCls = bem('step');

export const Step = React.memo(
    ({ label, index, isActive, onClick, isDisabled, isFinished, type = StepType.default }: StepProps): JSX.Element => {
        const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>): void => {
            event.preventDefault();
            onClick(index);
        };

        const getIcon = (): JSX.Element => {
            if (isFinished) {
                if (type === StepType.warning) {
                    return (
                        <img
                            src={advarselImg}
                            alt="Behandlet - Manuell oppgave"
                            className={stepCls.element('icon', 'warning')}
                        />
                    );
                }
                if (type === StepType.danger) {
                    return (
                        <img
                            src={avslaatImg}
                            alt="Oppgave løst/avslått"
                            className={stepCls.element('icon', 'danger')}
                        />
                    );
                }
                return (
                    <img
                        src={checkImg}
                        alt="Behandlet - Oppgave løst/godkjent"
                        className={stepCls.element('icon', 'success')}
                    />
                );
            }
            return <span className={stepCls.element('icon-placeholder')} />;
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
                    disabled={isDisabled && !isFinished}
                >
                    {getIcon()}
                    <Normaltekst tag="span">{label}</Normaltekst>
                    <span className={stepIndicatorCls} />
                </button>
            </li>
        );
    }
);
export default Step;
