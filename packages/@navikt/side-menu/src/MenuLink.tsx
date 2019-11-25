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
}

const menuLinkCls = bem('menu-link');

const MenuLink = ({ label, active, onClick, index, iconSrc }: MenuLinkProps): JSX.Element => {
    const handleOnClick = (event: React.FormEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        onClick(index);
    };

    const labelCls = classnames(menuLinkCls.elementWithModifier('label', active ? 'active' : undefined), {
        [menuLinkCls.elementWithModifier('label', 'with-icon')]: !!iconSrc,
    });

    return (
        <li className={menuLinkCls.block} aria-current={active ? true : undefined}>
            <button className={menuLinkCls.element('button')} onClick={handleOnClick} type="button">
                <Normaltekst tag="span" className={labelCls}>
                    {label}
                </Normaltekst>
            </button>
        </li>
    );
};

export default MenuLink;
