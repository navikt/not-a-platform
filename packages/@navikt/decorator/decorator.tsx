import * as React from 'react';

const Decorator: React.FunctionComponent = ({ children }) => {
    return (
        <>
            <h2 style={{ color: 'red' }}>Decorator</h2>
            {children}
        </>
    );
};

export default Decorator;
