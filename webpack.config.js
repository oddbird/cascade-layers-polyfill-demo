const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const plugins = [new MiniCssExtractPlugin()];

module.exports = {
	plugins,
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: [
					MiniCssExtractPlugin.loader,
          "css-loader",
          "postcss-loader",
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1,
						}
					},
					{
						loader: "postcss-loader",
						options: {
							postcssOptions: {
								plugins: [
									[
										"@csstools/postcss-cascade-layers",
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
