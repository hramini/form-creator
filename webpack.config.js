const { join } = require('path');
const { ProvidePlugin } = require('webpack');

module.exports = {
  mode: 'development',
  target: 'web',
  entry: join(__dirname, './example/index.tsx'),
  output: {
    filename: 'bundle.js',
    path: join(__dirname, 'build'),
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)/,
        exclude: /node_modules/,
        use: [{ loader: 'babel-loader' }, { loader: 'ts-loader' }],
      },
      {
        test: /\.(sass|scss|css)/,
        use: [
          { loader: 'style-loader' },
          { loader: 'css-loader' },
          { loader: 'sass-loader' },
        ],
      },
    ],
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.jsx'],
    alias: {
      '@basics': join(__dirname, './src/basics'),
      '@components': join(__dirname, './src/components'),
      '@theme': join(__dirname, './src/theme'),
      '@utils': join(__dirname, './src/utils'),
      '@root': join(__dirname, './src'),
    },
    fallback: {
      assert: false,
      url: false,
      os: false,
      https: false,
      http: false,
      stream: false,
      buffer: require.resolve('buffer'),
    },
  },
  plugins: [
    new ProvidePlugin({
      React: 'react',
      Buffer: ['buffer', 'Buffer'],
    }),
  ],
  devServer: {
    static: {
      directory: join(__dirname, './example'),
    },
    port: 4000,
    devMiddleware: {
      publicPath: '/build/',
    },
    hot: 'only',
    historyApiFallback: { index: '/', disableDotRule: true },
  },
};
