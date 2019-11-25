import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './MenuLinkStyles';
import classnames from 'classnames';

interface MenuLinkProps {
    label: string;
    onClick: (index: number) => void;
    index: number;
    active?: boolean;
    iconSrc?: string;
    iconAltText?: string;
}

const menuLinkCls = bem('menu-link');

const MenuLink = ({ label, active, onClick, index, iconSrc, iconAltText }: MenuLinkProps): JSX.Element => {
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

    return (
        <li className={menuLinkCls.block} aria-current={active ? true : undefined}>
            <button
                className={active ? menuLinkCls.elementWithModifier('button', 'active') : menuLinkCls.element('button')}
                onClick={handleOnClick}
                type="button"
            >
                <Normaltekst tag="span" className={labelCls}>
                    {label}
                    {iconSrc && <img src={iconSrc} alt={iconAltText} className={menuLinkCls.element('icon')} />}
                </Normaltekst>
            </button>
        </li>
    );
};

export default MenuLink;
