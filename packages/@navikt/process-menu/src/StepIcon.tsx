import bem from '@navikt/nap-bem-utils';
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
    iconAltText?: string;
}

const stepCls = bem('step');

const StepIcon = ({ type, isFinished, iconAltText }): JSX.Element => {
    if (isFinished) {
        return (
            <img
                src={checkImgPath}
                alt="Behandlet - Oppgave løst/godkjent"
                className={stepCls.elementWithModifier('icon', 'success')}
            />
        );
    }
    if (type === StepType.warning) {
        return (
            <img
                src={advarselImgPath}
                alt={iconAltText || 'Behandlet - Manuell oppgave'}
                className={stepCls.elementWithModifier('icon', 'warning')}
            />
        );
    }
    if (type === StepType.danger) {
        return (
            <img
                src={avslaatImgPath}
                alt={iconAltText || 'Oppgave løst/avslått'}
                className={stepCls.elementWithModifier('icon', 'danger')}
            />
        );
    }
    return <span className={stepCls.element('icon-placeholder')} />;
};

export default StepIcon;
