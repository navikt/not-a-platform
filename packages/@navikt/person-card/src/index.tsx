import bem from '@navikt/nap-bem-utils';
import Clipboard from '@navikt/nap-clipboard';
import Popover from '@navikt/nap-popover';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import Card from './Card';
import GenderIcon from './GenderIcon';
import Menu from './Menu';
import './indexStyles';

export type Gender = 'male' | 'female' | 'unknown';

export interface PersonCardData {
    name: string;
    fodselsnummer: string;
    gender: Gender;
    url: string;
    isActive?: boolean;
    renderMenuContent?: () => React.ReactNode;
    renderLabelContent?: () => React.ReactNode;
}

const personCardCls = bem('person-card');

const PersonCard = ({
    name,
    gender,
    fodselsnummer,
    isActive,
    url,
    renderMenuContent,
    renderLabelContent,
}: PersonCardData): JSX.Element => {
    const [isMenuOpen, setIsMenuOpen] = React.useState(false);
    const menuRef = React.useRef(null);
    const handleClickOutside = event => {
        if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsMenuOpen(false);
        }
    };
    React.useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    });

    const onClick = (): void => {
        setIsMenuOpen(!isMenuOpen);
    };
    return (
        <Card active={isActive}>
            <div className={personCardCls.element('container')}>
                <a className={personCardCls.element('selector')} aria-current={isActive} href={url}>
                    <GenderIcon gender={gender} />
                    <Normaltekst
                        tag="span"
                        className={
                            isActive
                                ? personCardCls.elementWithModifier('name', 'active')
                                : personCardCls.element('name')
                        }
                    >
                        {name}
                    </Normaltekst>
                </a>
            </div>
            <Normaltekst tag="span">/</Normaltekst>
            <div className={personCardCls.element('container')}>
                <Clipboard buttonLabel={`Kopier ${name}s fødselsnummer til utklippstavlen`}>
                    <Normaltekst>{fodselsnummer}</Normaltekst>
                </Clipboard>

                {renderMenuContent && (
                    <div ref={menuRef}>
                        <Popover
                            popperIsVisible={isMenuOpen}
                            renderArrowElement
                            customPopperStyles={{ top: '6px', left: '-1px' }}
                            popperProps={{
                                children: (): React.ReactNode =>
                                    renderMenuContent && (
                                        <div className={personCardCls.element('menu-container')}>
                                            {renderMenuContent()}
                                        </div>
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
                )}
                {renderLabelContent && (
                    <div className={personCardCls.element('labelContainer')}>{renderLabelContent()}</div>
                )}
            </div>
        </Card>
    );
};
export default PersonCard;
