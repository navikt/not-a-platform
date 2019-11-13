import * as React from 'react';
import './header';

interface HeaderProps {
    title: string;
    userName: string;
    userUnit?: string;
    renderUserPopoverContent?: () => React.ReactNode;
    renderLinksPopoverContent?: () => React.ReactNode;
    loading?: boolean;
}
export declare const Header: React.FunctionComponent<HeaderProps>;
export default Header;
