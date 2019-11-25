import * as React from 'react';
import bem from '@navikt/nap-bem-utils';
import { NedChevron, OppChevron } from 'nav-frontend-chevron';
import { Normaltekst as Text } from 'nav-frontend-typografi';
import './userContent';

const userCls = bem('user');

interface CurrentUserInfoProps {
    name: string;
    unit?: string;
    isInteractive?: boolean;
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const CurrentUserInfo: React.FunctionComponent<CurrentUserInfoProps> = ({
    name,
    unit,
    isInteractive,
    onClick,
    isToggled,
}) => {
    return (
        <>
            {isInteractive ? (
                <button
                    onClick={onClick}
                    type="button"
                    className={userCls.block}
                    aria-haspopup="dialog"
                    aria-expanded={isToggled}
                >
                    <span>
                        <Text tag="span" className={userCls.element('name')}>
                            {name}
                        </Text>
                        {unit && (
                            <Text tag="span" className={userCls.element('unit')}>
                                {unit}
                            </Text>
                        )}
                    </span>
                    {isToggled ? (
                        <OppChevron className={userCls.element('chevron')} />
                    ) : (
                        <NedChevron className={userCls.element('chevron')} />
                    )}
                </button>
            ) : (
                <div className={userCls.block}>
                    <Text className={userCls.element('name')}>{name}</Text>
                    {unit && <Text className={userCls.element('unit')}>{unit}</Text>}
                </div>
            )}
        </>
    );
};

export default CurrentUserInfo;
