module.exports = {
    roots: ['<rootDir>'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx|js)?$': 'babel-jest',
        '^.+.(css|less)$': 'jest-transform-stub',
        '^.+\\.stories\\.tsx?$': '@storybook/addon-storyshots/injectFileName',
    },
    moduleNameMapper: {
        '.*\\.(css|less)$': '<rootDir>/__mocks__/styleMock.js',
        '.*\\.(svg)$': '<rootDir>/__mocks__/fileMock.js',
    },
    moduleFileExtensions: ['js', 'json', 'ts', 'tsx', 'less', 'css'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*nav.*).*$'],
    collectCoverage: true,
    collectCoverageFrom: ['packages/**/src/*.(ts|tsx|js)'],
    coveragePathIgnorePatterns: ['application-wrapper'],
};
