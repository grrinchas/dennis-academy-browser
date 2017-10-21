import express from 'express';
import path from 'path';
import open from 'opn';
import chalk from 'chalk';
import compression from 'compression';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('docs'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../docs/index.html'));
});

app.listen(port, (err) => {
  if (err) {
    console.log(chalk.red(err));
  } else {
    open(`http://localhost:${port}`);
    console.log(chalk.green(`Starting server on port ${port}`));
  }
});
