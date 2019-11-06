import * as React from 'react';
import { Sidetittel } from 'nav-frontend-typografi';
import bem from '@navikt/bem-utils';
import Popover from '@navikt/popover';
import './decorator.less';
import User from './components/user/user';

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
                                                loading,
                                                renderUserPopoverContent,
                                                renderLinksPopoverContent
                                            }) => {
    const [popoverIsOpen, setPopoverIsOpen] = React.useState(false);
    return (
        <header className={decoratorCls.block}>
            <div className={decoratorCls.element('column')}>
            <Sidetittel className={decoratorCls.element('title')}>
                NAV
                <span className={decoratorCls.element('subtitle')}>{pageTitle}</span>
            </Sidetittel>
            </div>
            <Popover
                popperProps={{
                    children: ({ ref, style, placement, arrowProps }) => (
                        <div
                            ref={ref}
                            style={{
                                ...style,
                                display: popoverIsOpen ? 'block' : 'none',
                            }}
                            data-placement={placement}
                        >
                            Popper Element
                            <div
                                ref={arrowProps.ref}
                                style={arrowProps.style}
                            ></div>
                        </div>
                    ),
                    placement: 'bottom-start',
                }}
                referenceProps={{
                    children: ({ ref }) => (
                        <button
                            type="button"
                            ref={ref}
                            onClick={() => setPopoverIsOpen(!popoverIsOpen)}
                        >
                            ref
                        </button>
                    ),
                }}
                isOpen={popoverIsOpen}
            />
            <div className={decoratorCls.element('column')}>
                {userName && (
                    <User
                        name={userName}
                        unit={userUnit}
                        isInteractive={!!renderUserPopoverContent}
                        renderUserPopoverContent={renderUserPopoverContent}
                    ></User>
                )}
            </div>

        </header>
    );
};

export default Decorator;
