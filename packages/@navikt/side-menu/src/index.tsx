import bem from '@navikt/nap-bem-utils';
import { Normaltekst } from 'nav-frontend-typografi';
import * as React from 'react';
import './indexStyles';
import classnames from 'classnames';
import MenuLink from './MenuLink';

const sideMenuCls = bem('side-menu');

export interface Link {
    label: string;
    active?: boolean;
    iconSrc?: string;
    iconAltText?: string;
}

type ThemeProp = 'arrow';
enum Themes {
    arrow = 'arrow',
}

interface SideMenuProps {
    heading: string;
    links: Link[];
    onClick: (index: number) => void;
    theme?: ThemeProp;
}

const SideMenu = ({ links, heading, onClick, theme }: SideMenuProps): JSX.Element => {
    const hasArrowTheme = theme === Themes.arrow;
    const containerClassnames = classnames(sideMenuCls.element('container'), {
        [sideMenuCls.modifier('arrow-theme')]: hasArrowTheme,
    });
    return (
        <div className={sideMenuCls.block}>
            <nav className={containerClassnames}>
                <Normaltekst className={sideMenuCls.element('heading')}>{heading}</Normaltekst>
                <ul className={sideMenuCls.element('link-list')}>
                    {links.map(({ label, active, iconSrc, iconAltText }, index) => (
                        <MenuLink
                            key={label.split(' ').join('')}
                            label={label}
                            active={active}
                            onClick={() => onClick(index)}
                            iconSrc={iconSrc}
                            iconAltText={iconAltText}
                            arrowTheme={hasArrowTheme}
                        />
                    ))}
                </ul>
            </nav>
        </div>
    );
};

export default SideMenu;
