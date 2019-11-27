import * as React from 'react';
import { Sidetittel as PageTitle } from 'nav-frontend-typografi';
import bem from '@navikt/nap-bem-utils';
import Popover from '@navikt/nap-popover';
import CurrentUserInfo from './components/user-content/CurrentUserInfo';
import Systems from './components/systems/systems';
import './header';

interface HeaderProps {
    title: string;
    userName: string;
    userUnit?: string;
    renderUserPopoverContent?: () => React.ReactNode;
    renderLinksPopoverContent?: () => React.ReactNode;
    loading?: boolean;
}

const headerCls = bem('header');
export const Header: React.FunctionComponent<HeaderProps> = ({
    title,
    userName,
    userUnit,
    renderUserPopoverContent,
    renderLinksPopoverContent,
}) => {
    const [userInfoPopperIsVisible, setUserInfoPopperIsVisible] = React.useState(false);
    const [linksPopperIsVisible, setLinksPopperIsVisible] = React.useState(false);

    const systemsClickHandler = (): void => {
        setLinksPopperIsVisible(!linksPopperIsVisible);
        if (!linksPopperIsVisible) {
            setUserInfoPopperIsVisible(false);
        }
    };

    const currentUserInfoClickHandler = (): void => {
        setUserInfoPopperIsVisible(!userInfoPopperIsVisible);
        if (!userInfoPopperIsVisible) {
            setLinksPopperIsVisible(false);
        }
    };

    return (
        <header className={headerCls.block}>
            <div className={headerCls.element('column')}>
                <PageTitle className={headerCls.element('title')}>
                    NAVasdf
                    <span className={headerCls.element('subtitle')}>{title}</span>
                </PageTitle>
            </div>
            <div className={headerCls.element('column')}>
                <Popover
                    popperIsVisible={linksPopperIsVisible}
                    renderArrowElement
                    customPopperStyles={{ top: '8px' }}
                    popperProps={{
                        children: (): React.ReactNode => renderLinksPopoverContent && renderLinksPopoverContent(),
                        placement: 'bottom-start',
                        positionFixed: true,
                    }}
                    referenceProps={{
                        children: ({ ref }): React.ReactNode => (
                            <div ref={ref}>
                                <Systems onClick={systemsClickHandler} isToggled={linksPopperIsVisible} />
                            </div>
                        ),
                    }}
                />
                <Popover
                    popperIsVisible={userInfoPopperIsVisible}
                    renderArrowElement
                    customPopperStyles={{ top: '8px' }}
                    popperProps={{
                        children: (): React.ReactNode => renderUserPopoverContent && renderUserPopoverContent(),
                        placement: 'bottom-start',
                        positionFixed: true,
                    }}
                    referenceProps={{
                        children: ({ ref }): React.ReactNode => (
                            <div ref={ref}>
                                <CurrentUserInfo
                                    name={userName}
                                    unit={userUnit}
                                    isInteractive={!!renderUserPopoverContent}
                                    onClick={currentUserInfoClickHandler}
                                    isToggled={userInfoPopperIsVisible}
                                />
                            </div>
                        ),
                    }}
                />
            </div>
        </header>
    );
};

export default Header;
