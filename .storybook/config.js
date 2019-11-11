import { addDecorator, addParameters, configure } from '@storybook/react';
import { withA11y } from '@storybook/addon-a11y';
import { withInfo } from '@storybook/addon-info';

addDecorator(withA11y);
addDecorator(withInfo);
addParameters({ info: { inline: true } });
configure(require.context('../packages/@navikt/', true, /\.stories\.(ts|tsx)$/), module);
