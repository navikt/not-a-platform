import * as React from 'react';
import { Collapse } from 'react-collapse';
import bem from '../../bem-utils';
import './expandablePanelStyles';

const expandablePanelCls = bem('expandablePanel');

type ExpandablePanelTheme = 'success' | 'warn' | 'neutral';

interface ExpandablePanelProps {
    theme?: ExpandablePanelTheme;
    children: React.ReactChild | React.ReactChildren;
    renderHeader: () => React.ReactNode;
}

const ExpandablePanel: React.FunctionComponent<ExpandablePanelProps> = ({ renderHeader, children, theme }) => {
    const [isOpen, setIsOpen] = React.useState(false);
    return (
        <div className={expandablePanelCls.block}>
            <div className={theme ? expandablePanelCls.elementWithModifier('themeBorder', theme) : ''} />
            <div className={expandablePanelCls.element('contentWrapper')}>
                <button
                    className={expandablePanelCls.element('button')}
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {renderHeader()}
                </button>
                <Collapse isOpened={isOpen}>
                    <div className={expandablePanelCls.element('expandedContent')}>{children}</div>
                </Collapse>
            </div>
        </div>
    );
};

export default ExpandablePanel;
