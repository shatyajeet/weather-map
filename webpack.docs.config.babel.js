import {join} from 'path';
import HTMLWebpackPlugin from 'html-webpack-plugin';

const include = join(__dirname, 'src');

export default {
  entry: './src/index.js',
  output: {
    path: join(__dirname, 'docs'),
    libraryTarget: 'window',
    library: 'weatherMap',
    filename: 'weather-map.[hash].min.js',
  },
  devtool: 'cheap-module-source-map',
  module: {
    rules: [{
      test: /\.js/,
      use: 'babel-loader',
      include,
    }],
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: 'Weather Map',
      template: join(__dirname, 'template/index.ejs'),
      inject: 'head',
    }),
  ],
};
