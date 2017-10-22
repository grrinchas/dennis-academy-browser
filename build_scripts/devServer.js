import express from 'express';
import path from 'path';
import open from 'opn';
import chalk from 'chalk';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackConfig from '../config/webpack.dev';

const port = 3000;
const app = express();
const bundler = webpack(webpackConfig);

app.use(webpackDevMiddleware(bundler, {
    publicPath: webpackConfig.output.publicPath,
    noInfo: true,
}));

app.use(webpackHotMiddleware(bundler, {
    reload: true,
}));


app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../src/index.html'));
});

app.listen(port, (err) => {
    if (err) {
        console.log(chalk.red(err));
    } else {
        open(`http://localhost:${port}`);
        console.log(chalk.green(`Starting server on port ${port}`));
    }
});
