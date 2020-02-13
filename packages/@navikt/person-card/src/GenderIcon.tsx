import * as React from 'react';
import bem from '@navikt/nap-bem-utils';
import { Gender } from './index';

const maleImgPath = require('./assets/images/mann.svg') as string;
const femaleImgPath = require('./assets/images/kvinne.svg') as string;
const unknownGenderImagePath = require('./assets/images/ukjent.svg') as string;

const cardCls = bem('person-card');

interface GenderIconProps {
    gender?: Gender;
}

const GenderIcon = ({ gender }: GenderIconProps): JSX.Element => {
    let imagePath = unknownGenderImagePath;
    let altText = '';
    if (gender === 'male') {
        imagePath = maleImgPath;
        altText = 'Mann';
    } else if (gender === 'female') {
        imagePath = femaleImgPath;
        altText = 'Kvinne';
    }
    return (
        <img
            className={
                imagePath === unknownGenderImagePath
                    ? cardCls.elementWithModifier('gender-icon', 'unknown')
                    : cardCls.element('gender-icon')
            }
            src={imagePath}
            alt={altText}
        />
    );
};

export default GenderIcon;
