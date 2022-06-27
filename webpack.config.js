const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const plugins = [new MiniCssExtractPlugin()];

module.exports = {
  mode: 'development',
  entry: {
    app: ['./src/index.js', './src/index.css'],
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.css$/i,
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
