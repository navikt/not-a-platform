import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
    framework: 'react',
    test: multiSnapshotWithOptions({}),
});

initStoryshots({
    framework: 'react',
    suite: 'Image storyshots',
    test: imageSnapshot(),
});
