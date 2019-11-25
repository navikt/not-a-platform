import * as React from 'react';
import { Systemerknapp } from 'nav-frontend-ikonknapper';
import bem from '@navikt/nap-bem-utils';
import './systemsStyles';

const systemsCls = bem('systems');

interface SystemsInterface {
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const Systems: React.FunctionComponent<SystemsInterface> = ({ onClick, isToggled }) => {
    return (
        <div className={systemsCls.block}>
            <Systemerknapp
                onClick={onClick}
                className={systemsCls.element('button')}
                aria-haspopup="dialog"
                aria-expanded={isToggled}
            />
        </div>
    );
};

export default Systems;
