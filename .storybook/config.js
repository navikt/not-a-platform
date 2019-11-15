import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react';
import requireContext from 'require-context.macro';

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
const req = requireContext('../packages/@navikt', true, /\.stories\.(ts|tsx)$/);
configure(req, module);
