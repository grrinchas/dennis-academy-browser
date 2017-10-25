import UglifyJsWebpackPlugin from 'uglifyjs-webpack-plugin';
import ExtractTextWebpackPlugin from 'extract-text-webpack-plugin';
import CleanWebpackPlugin from 'clean-webpack-plugin';
import Webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';
import AppConfig from '../app.confg';

export default merge.smart(common, {
    devtool: 'source-map',
    entry: {
        main: AppConfig.entries.main,
    },
    output: {
        publicPath: './',
        path: AppConfig.paths.dist,
    },
    module: {
        rules: [{
            test: /\.scss$/,
            use: ExtractTextWebpackPlugin.extract({
                use: [{
                    loader: "css-loader"
                }, {
                    loader: "sass-loader"
                }],
                // use style-loader in development
                fallback: "style-loader"
            })
        }]
    },
    plugins: [
        new CleanWebpackPlugin(['docs', 'build']),
        new ExtractTextWebpackPlugin('[name].css'),
        new UglifyJsWebpackPlugin({
            sourceMap: true,
        }),
        new Webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify('production'),
            },
        }),
        new Webpack.LoaderOptionsPlugin({
            minimize: true,
        })
    ],
});
