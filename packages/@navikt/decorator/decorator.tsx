import * as React from 'react';
import { Sidetittel } from 'nav-frontend-typografi';
import bem from '@navikt/bem-utils';
import './decorator.less';

const decoratorCls = bem('decorator');
const Decorator: React.FunctionComponent = () => {
    return (
        <header className={decoratorCls.block}>
            <Sidetittel className={decoratorCls.element('title')}>
                NAV
            </Sidetittel>
        </header>
    );
};

export default Decorator;
