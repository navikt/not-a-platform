import * as React from 'react';
import styles from './expandablePanelStyles';
import bem from '../../bem-utils';

const expandablePanelCls = bem('expandablePanel');

type ExpandablePanelTheme = 'success' | 'warn' | 'neutral';

interface ExpandablePanelProps {
    theme: ExpandablePanelTheme;
    children: React.ReactChildren;
    renderHeader: () => React.ReactNode;
}

const ExpandablePanel: React.FunctionComponent<ExpandablePanelProps> = ({ renderHeader, children }) => (
    <div>
        <button type="button">{renderHeader()}</button>
        <div>{children}</div>
    </div>
);

export default ExpandablePanel;
