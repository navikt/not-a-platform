import * as React from 'react';

type Type = 'copy' | 'check';

interface ClipboardIconProps {
    type: Type;
    size?: number;
}

const defaultIconProps = {
    stroke: '#000',
    'stroke-linecap': 'round',
    'stroke-linejoin': 'round',
    strokeMiterlimit: '10',
    fill: 'none',
};

const svgForType = (type): JSX.Element => {
    switch (type) {
        case 'check':
            return <path {...defaultIconProps} d="M23.5.5l-16.5 23-6.5-6.5" strokeWidth="2" stroke="#38a161" />;
        case 'copy':
            return (
                <g {...defaultIconProps}>
                    <g strokeWidth="2">
                        <g transform="translate(4, 4)">
                            <polygon points="4.4408921e-14 19.1729323 4.4408921e-14 4.5112782 10.1503759 4.5112782 10.1503759 19.1729323" />
                            <polyline points="5.63909774 2.19924812 5.63909774 -2.69118061e-13 15.7894737 -2.69118061e-13 15.7894737 14.6616541 13.2518797 14.6616541" />
                        </g>
                    </g>
                </g>
            );
        default:
            throw new Error(`Cannot instantiate icon of type ${type}`);
    }
};

const ClipboardIcon = ({ size = 24, type }: ClipboardIconProps): JSX.Element => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="-2 0 26 26">
            {svgForType(type)}
        </svg>
    );
};

export default ClipboardIcon;
