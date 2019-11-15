import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
    framework: 'react',
});

initStoryshots({
    framework: 'react',
    suite: 'Image storyshots',
    test: imageSnapshot(),
});
