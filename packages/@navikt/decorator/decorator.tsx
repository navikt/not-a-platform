import * as React from 'react';
import { Sidetittel } from 'nav-frontend-typografi';
import bem from '@navikt/bem-utils';
import Popover from '@navikt/popover';
import './decorator.less';

const decoratorCls = bem('decorator');
const Decorator: React.FunctionComponent = () => {
    const [popoverIsOpen, setPopoverIsOpen] = React.useState(false);
    return (
        <header className={decoratorCls.block}>
            <Sidetittel className={decoratorCls.element('title')}>
                NAV
            </Sidetittel>
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
        </header>
    );
};

export default Decorator;
