import * as React from 'react';
import './userContent';

interface CurrentUserInfoProps {
    name: string;
    unit?: string;
    isInteractive?: boolean;
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}
declare const CurrentUserInfo: React.FunctionComponent<CurrentUserInfoProps>;
export default CurrentUserInfo;
