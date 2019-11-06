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
    isOpen: boolean;
}

const Popover: React.FunctionComponent<PopoverProps> = ({
    popperProps,
    referenceProps,
    isOpen,
}) => {
    return (
        <Manager>
            <Popper {...popperProps}></Popper>
            <Reference {...referenceProps}></Reference>
        </Manager>
    );
};

export default Popover;
