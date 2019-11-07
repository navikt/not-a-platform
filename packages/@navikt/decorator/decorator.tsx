import * as React from 'react';
import { Sidetittel as PageTitle } from 'nav-frontend-typografi';
import bem from '@navikt/bem-utils';
import Popover from '@navikt/popover';
import CurrentUserInfo from './components/user-content/CurrentUserInfo';
import './decorator.less';

interface DecoratorInterface {
    title: string;
    userName: string;
    userUnit: string;
    renderUserPopoverContent?: () => React.ReactNode;
    renderLinksPopoverContent?: () => React.ReactNode;
    loading?: boolean;
}

const decoratorCls = bem('decorator');
const Decorator: React.FunctionComponent<DecoratorInterface> = ({
    title,
    userName,
    userUnit,
    renderUserPopoverContent,
}) => {
    const [popperIsVisible, setPopperIsVisible] = React.useState(false);
    return (
        <header className={decoratorCls.block}>
            <div className={decoratorCls.element('column')}>
                <PageTitle className={decoratorCls.element('title')}>
                    NAV
                    <span className={decoratorCls.element('subtitle')}>
                        {title}
                    </span>
                </PageTitle>
            </div>
            <div className={decoratorCls.element('column')}>
                <Popover
                    popperIsVisible={popperIsVisible}
                    renderArrowElement={true}
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
                                    onClick={() =>
                                        setPopperIsVisible(!popperIsVisible)
                                    }
                                    isToggled={popperIsVisible}
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
