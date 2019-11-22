import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './indexStyles';
import MenuLink from './MenuLink';

const SideMenuCls = bem('side-menu');

export interface Link {
    label: string;
    active?: boolean;
    iconSrc?: string;
}

interface SideMenuProps {
    heading: string;
    links: Link[];
    onClick: (index: number) => void;
}

const SideMenu = ({ links, heading, onClick }: SideMenuProps): JSX.Element => (
    <nav className={SideMenuCls.block}>
        <Normaltekst className={SideMenuCls.element('heading')}>{heading}</Normaltekst>
        <ul className={SideMenuCls.element('link-list')}>
            {links.map(({ label, active, iconSrc }, index) => (
                <MenuLink
                    key={label.split(' ').join('')}
                    label={label}
                    active={active}
                    onClick={onClick}
                    index={index}
                    iconSrc={iconSrc}
                />
            ))}
        </ul>
    </nav>
);

export default SideMenu;
