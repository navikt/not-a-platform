import * as React from 'react';
import Popover from '../@navikt/popover/src/popover';

export default { title: '@navikt/nap-popover' };

const PopoverWithState = () => {
    const [isVisible, setIsVisible] = React.useState(false);
    return (
        <Popover
            popperIsVisible={isVisible}
            renderArrowElement
            customPopperStyles={{ top: '8px' }}
            popperProps={{
                children: () => <div>Content</div>,
                placement: 'bottom-start',
                strategy: 'fixed',
            }}
            referenceProps={{
                children: ({ ref }) => (
                    <div ref={ref}>
                        <button onClick={() => setIsVisible(!isVisible)} type="button">
                            Click me
                        </button>
                    </div>
                ),
            }}
        />
    );
};

export const popover = () => <PopoverWithState />;
