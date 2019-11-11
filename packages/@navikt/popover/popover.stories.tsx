import * as React from 'react';
import Popover from './popover';

export default { title: '@navikt/popover' };

export const normal = () => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
      <Popover
        popperIsVisible={isOpen}
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
                    <button onClick={() => setIsOpen(!isOpen)} type="button">
                            Click me
                    </button>
                  </div>
                ),
            }}
      />
    );
};
