const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [new MiniCssExtractPlugin()];

module.exports = {
  mode: 'development',
  entry: {
    main: './src/index.js',
    polyfilled: './src/index.css',
    raw: './src/index.css?raw',
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
                plugins: [
                  [
                    '@csstools/postcss-cascade-layers',
                    {
                      // Options
                    },
                  ],
                ],
              },
            },
          },
        ],
      },
    ],
  },
};
