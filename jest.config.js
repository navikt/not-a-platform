module.exports = {
    roots: ['<rootDir>/packages'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx|js)?$': 'babel-jest',
        '^.+.(css|less)$': 'jest-transform-stub',
        '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    },
    moduleNameMapper: {
        '.*\\.(css|less)$': '<rootDir>/packages/__mocks__/styleMock.js',
    },
    moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'less'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*nav.*).*$'],
};
