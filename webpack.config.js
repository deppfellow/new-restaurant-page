const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'development',
	entry: './src/index.js',
	output: {
		filename: './bundle.js',
		path: path.resolve(__dirname, 'dist'),
		assetModuleFilename: 'asset/[hash][ext][query]',
		clean: true,
	},
	module: {
		rules: [
			{ test: /\.css$/i, use: ['style-loader', 'css-loader'] },
			{ test: /\.(png|jpg|jpeg|gif|svg)$/i, type: 'asset/resource' },
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: "Terra's Cuisine",
			template: './src/index.html',
		}),
	],
	devServer: {
		static: './dist',
	},
	devtool: 'inline-source-map',
};
