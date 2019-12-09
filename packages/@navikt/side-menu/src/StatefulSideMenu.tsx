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

    const getLinksWithActiveState = (): Link[] =>
        links.map((link, index) => ({
            ...link,
            active: currentIndex === index,
        }));

    return <SideMenu heading={heading} links={getLinksWithActiveState()} onClick={handleOnClick} />;
};

export default StatefulSideMenu;
