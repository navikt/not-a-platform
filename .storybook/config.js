import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react';
import requireContext from 'require-context.macro';
import { themes } from '@storybook/theming';

addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(storyFn => <div style={{ maxWidth: '1920px', width: '100%', backgroundColor: 'white' }}>{storyFn()}</div>);
addParameters({ info: { inline: true } });
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
    options: {
        theme: themes.dark,
    },
});
const context = [requireContext('../packages/stories', true, /\.stories\.(ts|tsx)$/)];
configure(context, module);
