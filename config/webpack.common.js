import HtmlWebpackPlugin from 'html-webpack-plugin';

import AppConfig from '../app.confg';

export default {
    context: AppConfig.paths.root,
    target: 'web',
    stats: false,
    output: {
        publicPath: '/',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.scss$/,
                use: [{
                    loader: "style-loader" // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "sass-loader" // compiles Sass to CSS
                }]
            },
            {
                test: /\.elm$/,
                exclude: [/elm-stuff/, /node_modules/],
                use: {
                    loader: 'elm-webpack-loader?verbose=true&warn=true&forceWatch=true',
                },
            },
        ],
        noParse: /\.elm$/
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'src/index.html',
            inject: true,
        }),
    ],
};
