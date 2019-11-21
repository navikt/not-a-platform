import bem from '@navikt/bem-utils';
import * as React from 'react';
import { StepType } from './Step';
import './stepStyles';

/* eslint-disable global-require */
const advarselImgPath = require('./assets/images/advarsel.svg') as string;
const avslaatImgPath = require('./assets/images/avslaatt_valgt.svg') as string;
const checkImgPath = require('./assets/images/check.svg') as string;
/* eslint-enable global-require */

interface StepIconProps {
    type: string;
    isFinished?: boolean;
}

const stepCls = bem('step');

const StepIcon = ({ type, isFinished }): JSX.Element => {
    if (isFinished) {
        if (type === StepType.warning) {
            return (
                <img
                    src={advarselImgPath}
                    alt="Behandlet - Manuell oppgave"
                    className={stepCls.element('icon', 'warning')}
                />
            );
        }
        if (type === StepType.danger) {
            return (
                <img src={avslaatImgPath} alt="Oppgave løst/avslått" className={stepCls.element('icon', 'danger')} />
            );
        }
        return (
            <img
                src={checkImgPath}
                alt="Behandlet - Oppgave løst/godkjent"
                className={stepCls.element('icon', 'success')}
            />
        );
    }
    return <span className={stepCls.element('icon-placeholder')} />;
};

export default StepIcon;
