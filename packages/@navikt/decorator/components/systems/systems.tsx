import * as React from 'react';
import { Systemerknapp } from 'nav-frontend-ikonknapper';
import './systems.less';
import bem from '@navikt/bem-utils';

const systemsCls = bem('systems');

interface SystemsInterface {
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}

const SystemsSvg = () => (
    <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M0 6h6V0H0v6zm9 18h6v-6H9v6zm-9 0h6v-6H0v6zm0-9h6V9H0v6zm9 0h6V9H9v6zm9-15v6h6V0h-6zM9 6h6V0H9v6zm9 9h6V9h-6v6zm0 9h6v-6h-6v6z"
            fill="#FFF"
            fill-rule="nonzero"
        />
    </svg>
);

const Systems: React.FunctionComponent<SystemsInterface> = ({ onClick, isToggled }) => {
    return (
        <div className={systemsCls.block}>
            <button
                onClick={onClick}
                className={systemsCls.element('button')}
                aria-haspopup="dialog"
                aria-expanded={isToggled}
            >
                <SystemsSvg />
                <span className="sr-only">Systemer</span>
            </button>
        </div>
    );
};

export default Systems;
