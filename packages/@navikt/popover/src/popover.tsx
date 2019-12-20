import * as React from 'react';
import { Manager, Popper, PopperProps, Reference, ReferenceProps } from 'react-popper';

interface PopoverProps {
    popperProps: PopperProps;
    referenceProps: ReferenceProps;
    popperIsVisible: boolean;
    renderArrowElement?: boolean;
    customPopperStyles?: React.CSSProperties;
}

export const Popover: React.FunctionComponent<PopoverProps> = ({
    popperProps,
    referenceProps,
    popperIsVisible,
    renderArrowElement,
    customPopperStyles,
}) => {
    const { children, ...otherPopperProps } = popperProps;
    const [shouldRepaint, setShouldRepaint] = React.useState(false);

    React.useEffect(() => setShouldRepaint(true), [popperIsVisible]);

    const repaint = (scheduleUpdate: () => void): void => {
        if (shouldRepaint) {
            scheduleUpdate();
            setShouldRepaint(false);
        }
    };

    return (
        <Manager>
            <Reference {...referenceProps} />
            <Popper {...otherPopperProps}>
                {(popperChildrenProps): React.ReactNode => {
                    const { placement, ref, style, arrowProps, scheduleUpdate } = popperChildrenProps;
                    repaint(scheduleUpdate);
                    return (
                        <div
                            data-placement={placement}
                            ref={ref}
                            style={{
                                ...style,
                                ...customPopperStyles,
                                visibility: popperIsVisible ? 'visible' : 'hidden',
                            }}
                        >
                            {renderArrowElement && <div {...arrowProps} className="arrow" data-placement={placement} />}
                            {children(popperChildrenProps)}
                        </div>
                    );
                }}
            </Popper>
        </Manager>
    );
};

export default Popover;
