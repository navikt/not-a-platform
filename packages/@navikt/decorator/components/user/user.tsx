import * as React from 'react';
import bem from '@navikt/bem-utils';
import { Normaltekst as Text } from 'nav-frontend-typografi';
import './user.less';

const userCls = bem('user');

interface UserInterface {
    name: string;
    unit?: string;
    isInteractive?: boolean;
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
}

const User: React.FunctionComponent<UserInterface> = ({
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

export default User;
