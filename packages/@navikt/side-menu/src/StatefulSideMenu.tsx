import bem from '@navikt/nap-bem-utils';
import { Systemtittel } from 'nav-frontend-typografi';
import * as React from 'react';
import SideMenu, { Link } from './index';
import './statefulSideMenuStyles';

interface StatefulSideMenuProps {
    heading: string;
    links: Link[];
    onClick: (index: number) => void;
}

const statefulSideMenuCls = bem('statefulSideMenu');

const StatefulSideMenu = ({ heading, links, onClick }: StatefulSideMenuProps): JSX.Element => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleOnClick = (index: number): void => {
        setCurrentIndex(index);
        onClick(index);
    };

    const getLinksWithActiveState = (): Link[] =>
        links.map((link, index) => ({
            ...link,
            active: currentIndex === index,
        }));

    return (
        <div className={statefulSideMenuCls.block}>
            <SideMenu heading={heading} links={getLinksWithActiveState()} onClick={handleOnClick} />
            <div className={statefulSideMenuCls.element('content-container')}>
                <Systemtittel>{links[currentIndex].label}</Systemtittel>
            </div>
        </div>
    );
};

export default StatefulSideMenu;
