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
    path: AppConfig.paths.dist,
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ExtractTextWebpackPlugin.extract({
          fallback: 'style-loader',
          use: [{
            loader: 'css-loader',
            options: {
              minimize: true,
              sourceMap: true,
            },
          }],
        }),
      },
    ],
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
  ],
});
