import HtmlWebpackPlugin from 'html-webpack-plugin';

import AppConfig from '../app.confg';

export default {
    context: AppConfig.paths.root,
    target: 'web',
    stats: false,
    output: {
        publicPath: './',
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: {
                    loader: 'file-loader',
                },
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
