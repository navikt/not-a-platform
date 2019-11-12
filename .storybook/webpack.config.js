const path = require('path');

module.exports = async ({ config, mode }) => {
    const getRulesExceptBabelLoader = () =>
        config.module.rules.filter(
            rule => !(rule.use && rule.use.length && rule.use.find(({ loader }) => loader === 'babel-loader'))
        );

    config.module.rules = getRulesExceptBabelLoader();
    config.module.rules.push(
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            include: path.resolve(__dirname, '../'),
        },
        {
            test: /\.(ts|tsx)$/,
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        sourceType: 'unambiguous',
                        presets: [['react-app', { flow: false, typescript: true }]],
                    },
                },
                { loader: require.resolve('react-docgen-typescript-loader') },
                {
                    loader: require.resolve('@storybook/source-loader'),
                    options: { parser: 'typescript' },
                },
            ],
            enforce: 'pre',
        }
    );

    config.resolve.extensions.push('.ts', '.tsx');
    return config;
};
