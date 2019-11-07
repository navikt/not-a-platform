import * as React from 'react';
import bem from '@navikt/bem-utils';
import { Normaltekst as Text } from 'nav-frontend-typografi';
import './userContent.less';

const userCls = bem('user');

interface CurrentUserInfoProps {
    name: string;
    unit?: string;
    isInteractive?: boolean;
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const CurrentUserInfo: React.FunctionComponent<CurrentUserInfoProps> = ({
    name,
    unit,
    isInteractive,
    onClick,
}) => {
    return (
        <>
            {isInteractive ? (
                <button
                    onClick={onClick}
                    type="button"
                    className={userCls.block}
                >
                    <Text className={userCls.element('name')}>{name}</Text>
                    {unit && (
                        <Text className={userCls.element('unit')}>{unit}</Text>
                    )}
                </button>
            ) : (
                <div className={userCls.block}>
                    <Text className={userCls.element('name')}>{name}</Text>
                    {unit && (
                        <Text className={userCls.element('unit')}>{unit}</Text>
                    )}
                </div>
            )}
        </>
    );
};

export default CurrentUserInfo;
