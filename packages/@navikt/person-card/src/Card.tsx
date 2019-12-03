import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import Clipboard from './clipboard';
import './cardStyles';

/* eslint-disable global-require */
const maleImgPath = require('./assets/images/mann.svg') as string;
const femaleImgPath = require('./assets/images/kvinne.svg') as string;
/* eslint-enable global-require */

const cardCls = bem('card');

type Gender = 'male' | 'female';

interface CardProps {
    name: string;
    fodselsnummer: string;
    gender: Gender;
    isActive?: boolean;
    index: number;
    onClick: (index: number) => void;
}

const Card = ({ name, gender, fodselsnummer, isActive, index, onClick }: CardProps): JSX.Element => {
    const handleButtonClick = (event: React.FormEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        onClick(index);
    };
    return (
        <div className={isActive ? `${cardCls.block} ${cardCls.modifier('active')} ` : cardCls.block}>
            <div className={cardCls.element('container')}>
                <button className={cardCls.element('selector')} type="button" onClick={handleButtonClick}>
                    <img
                        className={cardCls.element('gender-icon')}
                        src={gender === 'male' ? maleImgPath : femaleImgPath}
                        alt={gender === 'male' ? 'mann' : 'kvinne'}
                    />
                    <Normaltekst
                        tag="span"
                        className={isActive ? cardCls.elementWithModifier('name', 'active') : cardCls.element('name')}
                    >
                        {name}
                    </Normaltekst>
                </button>
            </div>
            <Normaltekst tag="span">/</Normaltekst>
            <div className={cardCls.element('container')}>
                <Clipboard>
                    <Normaltekst>{fodselsnummer}</Normaltekst>
                </Clipboard>
            </div>
        </div>
    );
};
export default Card;
