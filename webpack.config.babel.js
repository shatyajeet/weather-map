import {join} from 'path';

const include = join(__dirname, 'src');

export default {
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'dist'),
    libraryTarget: 'umd',
    library: 'weatherMap',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.js/,
      use: 'babel-loader',
      include,
    }],
  },
};
