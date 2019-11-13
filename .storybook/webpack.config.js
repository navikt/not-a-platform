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
            include: [/(packages)/],
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
        },
        {
            test: /\.js$/,
            include: [/(.storybook)/],
            exclude: [path.resolve(__dirname, 'packages'), /(node_modules)/],
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
            },
        }
    );

    config.resolve.extensions.push('.ts', '.tsx');
    // console.dir(config, { depth: null }) || config;
    return config;
};
