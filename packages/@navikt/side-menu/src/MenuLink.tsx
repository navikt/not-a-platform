import bem from '@navikt/nap-bem-utils';
import classnames from 'classnames';
import TypografiBase from 'nav-frontend-typografi';
import * as React from 'react';
import './MenuLinkStyles';

interface MenuLinkProps {
    label: string;
    onClick: (index: number) => void;
    index: number;
    active?: boolean;
    iconSrc?: string;
    iconAltText?: string;
    arrowTheme?: boolean;
}

const menuLinkCls = bem('menu-link');

const MenuLink = ({ label, active, onClick, index, iconSrc, iconAltText, arrowTheme }: MenuLinkProps): JSX.Element => {
    const handleOnClick = (event: React.FormEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        onClick(index);
    };

    const labelCls = classnames(
        active ? menuLinkCls.elementWithModifier('label', 'active') : menuLinkCls.element('label'),
        {
            [menuLinkCls.elementWithModifier('label', 'with-icon')]: !!iconSrc,
        }
    );

    const containerClassnames = classnames(menuLinkCls.block, {
        [menuLinkCls.modifier('withArrows')]: arrowTheme,
    });

    const labeltype = arrowTheme && active ? 'element' : 'normaltekst';

    return (
        <li className={containerClassnames} aria-current={active ? true : undefined}>
            <button
                className={active ? menuLinkCls.elementWithModifier('button', 'active') : menuLinkCls.element('button')}
                onClick={handleOnClick}
                type="button"
            >
                <TypografiBase type={labeltype} tag="span" className={labelCls}>
                    {label}
                    {iconSrc && <img src={iconSrc} alt={iconAltText || ''} className={menuLinkCls.element('icon')} />}
                </TypografiBase>
                {arrowTheme && active && <span className={menuLinkCls.element('arrow-right')} />}
            </button>
        </li>
    );
};

export default MenuLink;
