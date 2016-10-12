var path = require('path');
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-hot-middleware/client',
    './src/index'
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'bundle.js',
    publicPath: '/static/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  eslint: {
    configFile: './.eslintrc'
  },
  module: {
    loaders: [
    // js
    {
      test: /\.js$/,
      loaders: ['babel', 'eslint'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src')
    },
    // CSS
    { 
      test: /\.scss$/, 
      include: path.join(__dirname, 'src'),
      loaders: ['style', 'css', 'sass']
    }
    ]
  }
};
