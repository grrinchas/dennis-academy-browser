import Webpack from 'webpack';
import merge from 'webpack-merge';
import common from './webpack.common';
import AppConfig from '../app.confg';

export default merge.smart(common, {
    target: 'web',
    devtool: 'inline-source-map',
    entry: {
        main: ['webpack-hot-middleware/client', AppConfig.entries.main],
    },
    output: {
        publicPath: '/',
        path: AppConfig.paths.build,
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin(),
        new Webpack.NoEmitOnErrorsPlugin(),
    ],
});
