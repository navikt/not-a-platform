import * as React from 'react';
import { Sidetittel as PageTitle } from 'nav-frontend-typografi';
import bem from '@navikt/bem-utils';
import Popover from '@navikt/popover';
import CurrentUserInfo from './components/user-content/CurrentUserInfo';
import './decorator.less';
import Systems from './components/systems/systems';

interface DecoratorInterface {
    title: string;
    userName: string;
    userUnit: string;
    renderUserPopoverContent?: () => React.ReactNode;
    renderLinksPopoverContent?: () => React.ReactNode;
    renderSearchLink?: () => React.ReactNode;
    loading?: boolean;
}

const decoratorCls = bem('decorator');
const Decorator: React.FunctionComponent<DecoratorInterface> = ({
    title,
    userName,
    userUnit,
    renderUserPopoverContent,
    renderLinksPopoverContent,
    renderSearchLink,
}) => {
    const [userInfoPopperIsVisible, setUserInfoPopperIsVisible] = React.useState(false);
    const [linksPopperIsVisible, setLinksPopperIsVisible] = React.useState(false);

    const systemsClickHandler = () => {
        setLinksPopperIsVisible(!linksPopperIsVisible);
        if (!linksPopperIsVisible) {
            setUserInfoPopperIsVisible(false);
        }
    };

    const currentUserInfoClickHandler = () => {
        setUserInfoPopperIsVisible(!userInfoPopperIsVisible);
        if (!userInfoPopperIsVisible) {
            setLinksPopperIsVisible(false);
        }
    };

    return (
        <header className={decoratorCls.block}>
            <div className={decoratorCls.element('column')}>
                <PageTitle className={decoratorCls.element('title')}>
                    NAV
                    <span className={decoratorCls.element('subtitle')}>{title}</span>
                </PageTitle>
            </div>
            <div className={decoratorCls.element('column')}>
                {renderSearchLink && renderSearchLink()}
                <Popover
                    popperIsVisible={linksPopperIsVisible}
                    renderArrowElement={true}
                    customPopperStyles={{ top: '8px' }}
                    popperProps={{
                        children: () => renderLinksPopoverContent(),
                        placement: 'bottom-start',
                        positionFixed: true,
                    }}
                    referenceProps={{
                        children: ({ ref }) => (
                            <div ref={ref}>
                                <Systems onClick={systemsClickHandler} isToggled={linksPopperIsVisible} />
                            </div>
                        ),
                    }}
                />
                <Popover
                    popperIsVisible={userInfoPopperIsVisible}
                    renderArrowElement={true}
                    customPopperStyles={{ top: '8px' }}
                    popperProps={{
                        children: () => renderUserPopoverContent(),
                        placement: 'bottom-start',
                        positionFixed: true,
                    }}
                    referenceProps={{
                        children: ({ ref }) => (
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

export default Decorator;
