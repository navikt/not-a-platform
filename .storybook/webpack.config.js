const path = require('path');

module.exports = async ({ config, mode }) => {
    const getRulesExceptBabelLoader = () =>
        config.module.rules.filter(
            rule => !(rule.use && rule.use.length && rule.use.find(({ loader }) => loader === 'babel-loader'))
        );

    const omitSvgHandling = () =>
        config.module.rules.map(data => {
            if (/svg\|/.test(String(data.test))) {
                data.test = /\.(ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/;
            }

            return data;
        });

    config.module.rules = omitSvgHandling();
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
            exclude: [/(node_modules)/],
            use: [
                {
                    loader: require.resolve('babel-loader'),
                    options: {
                        sourceType: 'unambiguous',
                        presets: [['react-app', { flow: false, typescript: true }]],
                        cacheDirectory: true,
                    },
                },
                { loader: require.resolve('react-docgen-typescript-loader') },
            ],
        },
        {
            test: /\.stories\.tsx?$/,
            include: [/(packages)/],
            use: [
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
            exclude: [/(packages)/, /(node_modules)/],
            loader: 'babel-loader',
            options: {
                presets: ['@babel/preset-env', '@babel/preset-react'],
                cacheDirectory: true,
            },
        },
        {
            test: /\.(svg)$/,
            loader: 'file-loader',
            options: {
                name: '[name]_[hash].[ext]',
            },
        }
    );

    config.resolve.extensions.push('.ts', '.tsx', '.less');
    return config;
};
