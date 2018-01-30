const webpack = require('webpack'),
	  path = require('path'),
	  htmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
	entry: path.resolve(__dirname,'./src/react-demo/index.jsx'),
	output: {
		path: path.resolve(__dirname,'./build'),
		filename: 'bundle.js'
	},
	devtool: 'eval-source-map',
	devServer: {
		contentBase: __dirname,
		historyApiFallback: true,
		inline: true
	},
	module: {
		rules: [{
			test: /(\.js|\.jsx)$/,
			use: {
				loader: "babel-loader"
			},
			exclude:/node_modules/
		},{
			test: /\.css$/,
			use:[{
				loader: "style-loader"
			},{
				loader: "css-loader"
			}]
		}]
	},
	plugins:[
		new htmlWebpackPlugin({
				template: "./template/index.html"
		})
	]
}