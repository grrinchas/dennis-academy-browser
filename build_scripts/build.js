import webpack from 'webpack';
import chalk from 'chalk';
import webpackConfig from '../config/webpack.prod';

const bundler = webpack(webpackConfig);

process.env.NODE_ENV = 'production';

console.log(chalk.blue('Generating minified bundle for production. This may take a while...'));

bundler.run((err, stats) => {
  if (err) {
    console.log(chalk.red(err));
    return 1;
  }
  console.log(chalk.red(stats));
  return 0;
});
