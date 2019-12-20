import bem from '@navikt/nap-bem-utils';
import Clipboard from '@navikt/nap-clipboard';
import Popover from '@navikt/nap-popover';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './cardStyles';
import GenderIcon from './GenderIcon';
import { PersonCardData } from './index';
import Menu from './Menu';

const cardCls = bem('card');

const Card = ({ name, gender, fodselsnummer, isActive, url, renderMenuContent }: PersonCardData): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);

    const onClick = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <div className={isActive ? `${cardCls.block} ${cardCls.modifier('active')} ` : cardCls.block}>
            <div className={cardCls.element('container')}>
                <a className={cardCls.element('selector')} aria-current={isActive} href={url}>
                    <GenderIcon gender={gender} />
                    <Normaltekst
                        tag="span"
                        className={isActive ? cardCls.elementWithModifier('name', 'active') : cardCls.element('name')}
                    >
                        {name}
                    </Normaltekst>
                </a>
            </div>
            <Normaltekst tag="span">/</Normaltekst>
            <div className={cardCls.element('container')}>
                <Clipboard buttonLabel={`Kopier ${name}s fødselsnummer til utklippstavlen`}>
                    <Normaltekst>{fodselsnummer}</Normaltekst>
                </Clipboard>

                <Popover
                    popperIsVisible={isMenuOpen}
                    renderArrowElement
                    customPopperStyles={{ top: '6px', left: '-1px' }}
                    popperProps={{
                        children: (): React.ReactNode =>
                            renderMenuContent && (
                                <div className={cardCls.element('menu-container')}>{renderMenuContent()}</div>
                            ),
                        placement: 'bottom-start',
                        positionFixed: true,
                    }}
                    referenceProps={{
                        children: ({ ref }): React.ReactNode => (
                            <div ref={ref}>
                                <Menu onClick={onClick} isOpen={isMenuOpen} />
                            </div>
                        ),
                    }}
                />
            </div>
        </div>
    );
};
export default Card;
