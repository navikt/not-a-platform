import * as React from 'react';
import Decorator from '@navikt/decorator';

const ApplicationWrapper: React.FunctionComponent = ({ children }) => {
    return (
        <Decorator>
            <h2 style={{ color: 'blue' }}>ApplicationWrapper</h2>
            {children}
        </Decorator>
    );
};

export default ApplicationWrapper;
