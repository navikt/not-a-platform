import * as React from 'react';
import {
    Manager,
    Popper,
    PopperProps,
    Reference,
    ReferenceProps,
} from 'react-popper';

interface PopoverProps {
    popperProps: PopperProps;
    referenceProps: ReferenceProps;
    popperIsVisible: boolean;
    renderArrowElement?: boolean;
}

const Popover: React.FunctionComponent<PopoverProps> = ({
    popperProps,
    referenceProps,
    popperIsVisible,
    renderArrowElement,
}) => {
    const { children, ...otherPopperProps } = popperProps;
    return (
        <Manager>
            <Reference {...referenceProps} />
            <Popper {...otherPopperProps}>
                {popperChildrenProps => {
                    const {
                        placement,
                        ref,
                        style,
                        arrowProps,
                    } = popperChildrenProps;
                    return (
                        <span
                            data-placement={placement}
                            ref={ref}
                            style={{
                                ...style,
                                top: '8px',
                                visibility: popperIsVisible
                                    ? 'visible'
                                    : 'hidden',
                            }}
                        >
                            {renderArrowElement && (
                                <div
                                    {...arrowProps}
                                    className="arrow"
                                    data-placement={placement}
                                />
                            )}
                            {children(popperChildrenProps)}
                        </span>
                    );
                }}
            </Popper>
        </Manager>
    );
};

export default Popover;
