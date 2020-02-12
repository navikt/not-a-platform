import { addDecorator, addParameters } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';
import { DocsPage, DocsContainer } from '@storybook/addon-docs/blocks';
import React from 'react';

addDecorator(withA11y);
addDecorator(withInfo);
addDecorator(storyFn => <div style={{ maxWidth: '1920px', width: '100%', backgroundColor: 'white' }}>{storyFn()}</div>);
addParameters({ info: { inline: true } });
addParameters({
    docs: {
        container: DocsContainer,
        page: DocsPage,
    },
});
