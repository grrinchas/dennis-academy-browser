import path from 'path';

const AppConfig = {
  paths: {
    root: path.resolve(__dirname),
    src: path.resolve(__dirname, 'src'),
    build: path.resolve(__dirname, 'build'),
    dist: path.resolve(__dirname, 'docs'),
  },
  entries: {
    main: path.resolve(__dirname, 'src/main.jsx'),
  },
};

export default AppConfig;

