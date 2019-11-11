import { configure } from '@storybook/react';

configure(require.context('../packages/@navikt/', true, /\.stories\.(ts|tsx)$/), module);
