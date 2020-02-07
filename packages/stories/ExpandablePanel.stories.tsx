import * as React from 'react';
import ExpandablePanel from '../@navikt/expandable-panel/src';
import 'normalize.css';

export default { title: '@navikt/nap-expandable-panel' };

export const propsControlled = (): React.ReactNode => (
    <div style={{ margin: '1rem' }}>
        <div style={{ margin: '1rem 0' }}>
            <ExpandablePanel renderHeader={() => <p>Noe tekst her</p>} theme="success">
                <p>Hei du</p>
            </ExpandablePanel>
        </div>
        <div style={{ margin: '1rem 0' }}>
            <ExpandablePanel renderHeader={() => <p>Noe tekst her</p>} theme="warn">
                <p>Hei du</p>
            </ExpandablePanel>
        </div>
        <div style={{ margin: '1rem 0' }}>
            <ExpandablePanel renderHeader={() => <p>Noe tekst her</p>} theme="neutral">
                <p>Hei du</p>
            </ExpandablePanel>
        </div>
    </div>
);
