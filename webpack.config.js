const webpack = require('webpack'),
	  path = require('path'),
	  process = require('process'),
	  htmlWebpackPlugin = require('html-webpack-plugin'),
	  ExtractTextPlugin = require('extract-text-webpack-plugin');
	  REACT = "react-demo",
	  LESS = "less";
	  project = LESS;

module.exports = {
	entry: path.resolve(__dirname,'./src/' + project+ '/index.jsx'),
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
			test: /\.less/,
			use:[{
				loader: "style-loader"
			},{
				loader: "css-loader"
			},{
				loader: "less-loader"
			}]
		}]
	},
	plugins:[
		new htmlWebpackPlugin({
				template: "./template/index-" + project + ".html"
		})
	]
}