import bem from '@navikt/bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import advarselImg from '../assets/images/advarsel.svg';
import avslaatImg from '../assets/images/avslaatt_valgt.svg';
import checkImg from '../assets/images/check.svg';
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
        if (isManual) {
            return 'manual';
        }
        if (isDenied) {
            return 'denied';
        }
        if (stepIsFinished) {
            return 'finished';
        }
        return '';
    };

    const getIcon = (): JSX.Element | null => {
        if (stepIsFinished) {
            if (isManual) {
                return (
                    <img
                        src={advarselImg}
                        alt="Behandlet - Manuell oppgave"
                        className={stepCls.element('icon', 'warning')}
                    />
                );
            }
            if (isDenied) {
                return (
                    <img src={avslaatImg} alt="Oppgave løst/avslått" className={stepCls.element('icon', 'denied')} />
                );
            }
            return (
                <img
                    src={checkImg}
                    alt="Behandlet - Oppgave løst/godkjent"
                    className={stepCls.element('icon', 'check')}
                />
            );
        }
        return null;
    };

    let statusCls = stepCls.element('indicator', stepIsFinished && getModifierClass());
    if (isActive) {
        statusCls = statusCls.concat(' -active');
    }

    return (
        <li key={label.split(' ').join('')} className={stepCls.block} aria-current={isActive ? 'step' : undefined}>
            <button
                className={stepCls.element('button', isActive ? 'active' : undefined)}
                type="button"
                onClick={handleButtonClick}
                disabled={isDisabled && !stepIsFinished}
            >
                {getIcon()}
                <Normaltekst tag="span">{label}</Normaltekst>
                <span className={statusCls} />
            </button>
        </li>
    );
};
export default Step;
