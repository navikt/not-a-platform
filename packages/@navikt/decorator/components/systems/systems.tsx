import * as React from 'react';
import { Systemerknapp } from 'nav-frontend-ikonknapper';
import './systems.less';
import bem from '@navikt/bem-utils';

const systemsCls = bem('systems');

interface SystemsInterface {
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const Systems: React.FunctionComponent<SystemsInterface> = ({
    onClick,
    isToggled,
}) => {
    return (
        <div className={systemsCls.block}>
            <Systemerknapp
                onClick={onClick}
                className={systemsCls.element('button')}
                aria-haspopup="dialog"
                aria-expanded={isToggled}
            ></Systemerknapp>
        </div>
    );
};

export default Systems;
