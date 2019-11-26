import initStoryshots, { multiSnapshotWithOptions } from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

initStoryshots({
    framework: 'react',
    test: multiSnapshotWithOptions({}),
    storyKindRegex: /^((?!.*?Examples).)*$/,
});

initStoryshots({
    framework: 'react',
    suite: 'Image storyshots',
    test: imageSnapshot(),
    storyKindRegex: /^((?!.*?Examples).)*$/,
});
