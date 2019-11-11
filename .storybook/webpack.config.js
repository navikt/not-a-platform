const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = async ({ config, mode }) => {
    // `mode` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.
    config.module.rules = config.module.rules.filter(
        rule => !(rule.use && rule.use.length && rule.use.find(({ loader }) => loader === 'babel-loader'))
    );
    config.module.rules.push(
        {
            test: /\.less$/,
            use: ['style-loader', 'css-loader', 'less-loader'],
            include: path.resolve(__dirname, '../'),
        },
        {
            test: /\.(ts|tsx)$/,
            loader: require.resolve('babel-loader'),
            options: {
                sourceType: 'unambiguous',
                presets: [['react-app', { flow: false, typescript: true }]],
            },
        }
    );

    config.resolve.extensions.push('.ts', '.tsx');
    // Return the altered config
    return config;
};
