const webpack = require('webpack'),
	  path = require('path'),
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
			use: [{
				loader: "babel-loader"
			},{
				loader: 'aaloadertest',
				options: {
					name: 'jiawekang'
				}
			}],
			exclude:/node_modules/
		},{
			test: /\.less/,
			use:[{
				loader: "style-loader"
			},{
				loader: "css-loader?modules&localIdentName=[local]___[hash:base64:5]"
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




