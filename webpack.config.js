const webpack = require('webpack');

const babelLoaderConfig = {
  presets: ['es2015', 'stage-0', 'react'],
  plugins: [['antd', {'style': true, libraryName: 'antd-mobile'}]],
};

module.exports = {
  entry: [
    'webpack-dev-server/client?http://0.0.0.0:8080',
    'webpack/hot/only-dev-server',
    'babel-polyfill',
    './src/index.js',
  ],

  output: {
    path: __dirname + '/dist',
    filename: 'bundle.js',
  },

  resolve: {
    modulesDirectories: ['node_modules', './src'],
    extensions: ['', '.web.js', '.json', '.js', '.jsx'],
  },

  module: {
    loaders: [  // 似乎react-hot-loader失效了
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel-loader?' + JSON.stringify(babelLoaderConfig)],
        exclude: /node_modules/,
      }, {
        test: /\.css$/,
        loader: 'style!css',
      }, {
        test: /\.less$/,
        loader: 'style!css!less',
      }, {
        test: /\.(png|jpg|svg)$/,
        loader: 'url?limit=25000',
      },
    ],
  },

  plugins: [
    new webpack.BannerPlugin('This file is created by jxy'),
    new webpack.DefinePlugin({
      __DEV__: JSON.stringify(JSON.parse(process.env.NODE_ENV === 'production' ? 'false' : 'true')),
    }),
  ],
};
