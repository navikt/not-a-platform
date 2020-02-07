import * as React from 'react';
import ExpandablePanel from '../@navikt/expandable-panel/src';

export default { title: '@navikt/nap-expander-with-border' };

export const propsControlled = (): React.ReactNode => <ExpandablePanel content={() => <p>Noe tekst her</p>} />;
