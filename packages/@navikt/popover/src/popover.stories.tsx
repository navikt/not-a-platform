import * as React from 'react';
import Popover from './popover';

export default { title: '@navikt/popover' };

export const closed = () => {
    return (
        <Popover
            popperIsVisible={false}
            renderArrowElement
            customPopperStyles={{ top: '8px' }}
            popperProps={{
                children: () => <div>Content</div>,
                placement: 'bottom-start',
                positionFixed: true,
            }}
            referenceProps={{
                children: ({ ref }) => (
                    <div ref={ref}>
                        <button onClick={() => null} type="button">
                            Click me
                        </button>
                    </div>
                ),
            }}
        />
    );
};

export const open = () => {
    return (
        <Popover
            popperIsVisible
            renderArrowElement
            customPopperStyles={{ top: '8px' }}
            popperProps={{
                children: () => <div>Content</div>,
                placement: 'bottom-start',
                positionFixed: true,
            }}
            referenceProps={{
                children: ({ ref }) => (
                    <div ref={ref}>
                        <button onClick={() => null} type="button">
                            Click me
                        </button>
                    </div>
                ),
            }}
        />
    );
};
