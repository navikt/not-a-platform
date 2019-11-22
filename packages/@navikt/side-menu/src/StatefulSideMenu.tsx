import { Systemtittel } from 'nav-frontend-typografi';
import * as React from 'react';
import SideMenu, { Link } from './index';

interface StatefulSideMenuProps {
    heading: string;
    links: Link[];
    onClick: (index: number) => void;
}

const StatefulSideMenu = ({ heading, links, onClick }: StatefulSideMenuProps): JSX.Element => {
    const [currentIndex, setCurrentIndex] = React.useState(0);
    const handleOnClick = (index: number): void => {
        setCurrentIndex(index);
        onClick(index);
    };

    const getLinksWithActiveState = (): Link[] => {
        return links.map((link, index) => {
            return {
                ...link,
                active: currentIndex === index,
            };
        });
    };

    return (
        <div style={{ display: 'flex' }}>
            <SideMenu heading={heading} links={getLinksWithActiveState()} onClick={handleOnClick} />
            <div style={{ marginLeft: '20px' }}>
                <Systemtittel>{links[currentIndex].label}</Systemtittel>
            </div>
        </div>
    );
};

export default StatefulSideMenu;
