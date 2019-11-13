import * as React from 'react';
import './systemsStyles';

interface SystemsInterface {
    onClick: (e: React.FormEvent<HTMLButtonElement>) => void;
    isToggled?: boolean;
}
declare const Systems: React.FunctionComponent<SystemsInterface>;
export default Systems;
