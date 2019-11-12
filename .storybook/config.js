import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react';

addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(storyFn => <div style={{ maxWidth: '800px', width: '100%' }}>{storyFn()}</div>);
addParameters({ info: { inline: true } });
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});
configure(require.context('../packages/@navikt/', true, /\.stories\.(ts|tsx)$/), module);
