const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [new MiniCssExtractPlugin()];

module.exports = {
  mode: 'production',
  entry: {
    main: './src/index.js',
    polyfilled: './src/index.css',
    plain: './src/index.css?raw',
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.css$/i,
        resourceQuery: /raw/,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
          },
        ],
      },
      {
        test: /\.css$/i,
        resourceQuery: { not: [/raw/] },
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
            },
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                plugins: ['postcss-import', '@csstools/postcss-cascade-layers'],
              },
            },
          },
        ],
      },
      {
        test: /\.(?:js|mjs|cjs)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [['@babel/preset-env', { targets: 'defaults, ie 11' }]],
          },
        },
      },
    ],
  },
};
