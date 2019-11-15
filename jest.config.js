module.exports = {
    roots: ['<rootDir>/packages'],
    testMatch: ['**/__tests__/**/*.+(ts|tsx|js)', '**/?(*.)+(spec|test).+(ts|tsx|js)'],
    transform: {
        '^.+\\.(ts|tsx|js)?$': 'babel-jest',
        '^.+.(css|styl|less|sass|scss|png|jpg|ttf|woff|woff2)$': 'jest-transform-stub',
    },
    moduleNameMapper: {
        '.*\\.(css|less)$': '<rootDir>/packages/__mocks__/styleMock.js',
    },
    moduleFileExtensions: ['js', 'json', 'jsx', 'ts', 'tsx', 'node', 'less'],
    testPathIgnorePatterns: ['/node_modules/', '/dist/'],
    transformIgnorePatterns: ['<rootDir>.*(node_modules)(?!.*nav.*).*$'],
};
