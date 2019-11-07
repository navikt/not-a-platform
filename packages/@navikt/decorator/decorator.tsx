import * as React from 'react';
import { Sidetittel as PageTitle } from 'nav-frontend-typografi';
import bem from '@navikt/bem-utils';
import Popover from '@navikt/popover';
import User from './components/user/user';
import './decorator.less';

interface DecoratorInterface {
    pageTitle: string;
    userName: string;
    userUnit: string;
    renderUserPopoverContent?: () => React.ReactNode;
    renderLinksPopoverContent?: () => React.ReactNode;
    loading?: boolean;
}

const decoratorCls = bem('decorator');
const Decorator: React.FunctionComponent<DecoratorInterface> = ({
    pageTitle,
    userName,
    userUnit,
    renderUserPopoverContent,
}) => {
    const [popoverIsOpen, setPopoverIsOpen] = React.useState(false);
    return (
        <header className={decoratorCls.block}>
            <div className={decoratorCls.element('column')}>
                <PageTitle className={decoratorCls.element('title')}>
                    NAV
                    <span className={decoratorCls.element('subtitle')}>
                        {pageTitle}
                    </span>
                </PageTitle>
            </div>
            <div className={decoratorCls.element('column')}>
                <Popover
                    popperProps={{
                        children: ({
                            placement,
                            ref,
                            style,
                            scheduleUpdate,
                        }) => {
                            setTimeout(scheduleUpdate);
                            //scheduleUpdate();
                            return (
                                <div
                                    data-placement={placement}
                                    ref={ref}
                                    style={{
                                        ...style,
                                        top: '8px',
                                        display: !popoverIsOpen
                                            ? 'none'
                                            : 'block',
                                    }}
                                >
                                    {renderUserPopoverContent()}
                                </div>
                            );
                        },
                        placement: 'bottom-start',
                    }}
                    referenceProps={{
                        children: ({ ref }) => (
                            <div ref={ref}>
                                <User
                                    name={userName}
                                    unit={userUnit}
                                    isInteractive={!!renderUserPopoverContent}
                                    onClick={() =>
                                        setPopoverIsOpen(!popoverIsOpen)
                                    }
                                ></User>
                            </div>
                        ),
                    }}
                    isOpen={popoverIsOpen}
                />
            </div>
        </header>
    );
};

export default Decorator;
