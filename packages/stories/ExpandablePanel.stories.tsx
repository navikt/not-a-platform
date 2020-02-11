import * as React from 'react';
import ExpandablePanel from '../@navikt/expandable-panel/src';
import 'normalize.css';

export default { title: '@navikt/nap-expandable-panel' };

export const propsControlled = (): React.ReactNode => {
    const [isOpen1, setIsOpen1] = React.useState(false);
    const [isOpen2, setIsOpen2] = React.useState(false);
    const [isOpen3, setIsOpen3] = React.useState(false);
    return (
        <div style={{ margin: '1rem' }}>
            <div style={{ margin: '1rem 0' }}>
                <ExpandablePanel
                    renderHeader={() => <p>Noe tekst her</p>}
                    theme="success"
                    isOpen={isOpen1}
                    onClick={() => setIsOpen1(!isOpen1)}
                >
                    <p>Hei du</p>
                </ExpandablePanel>
            </div>
            <div style={{ margin: '1rem 0' }}>
                <ExpandablePanel
                    renderHeader={() => <p>Noe tekst her</p>}
                    theme="warn"
                    isOpen={isOpen2}
                    onClick={() => setIsOpen2(!isOpen2)}
                >
                    <p>Hei du</p>
                </ExpandablePanel>
            </div>
            <div style={{ margin: '1rem 0' }}>
                <ExpandablePanel
                    renderHeader={() => <p>Noe tekst her</p>}
                    theme="neutral"
                    isOpen={isOpen3}
                    onClick={() => setIsOpen3(!isOpen3)}
                >
                    <p>Hei du</p>
                </ExpandablePanel>
            </div>
        </div>
    );
};
