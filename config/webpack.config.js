const HTMLWebpackPlugin = require("html-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const paths = require("./paths");

module.exports = {
  context: paths.src,
  entry: {
    "index": './js/index.js',
    "about": './js/about.js',
    "404": './js/404.js'
  },
  output: {
    filename: './js/[name].js',
    path: paths.build,
    clean: false,
    assetModuleFilename: '[path][name][ext]'
  },
 
  plugins: [
    // Copies all the files from public to assets except css, html and js
    new CopyWebpackPlugin({
      patterns: [
        {
          from: "./assets",
          to: "assets",
          globOptions: {
            ignore: [ "*.DS_Store","**/css/*.css", "**/js/*.js", "**/*.html"],
            //ignore: [],
          },
          noErrorOnMissing: true,
        },
      ],
    }),
    new MiniCssExtractPlugin({
      filename: "./css/[name].css",
      chunkFilename: "[name].css",
    }),
	new HTMLWebpackPlugin({
		template: './index.ejs',
		filename: 'index.html',
		sources: false,
		minify: false,
		chunks: ["index"]
	  }),
	  new HTMLWebpackPlugin({
		template: './404.ejs',
		filename: '404.html',
		sources: false,
		minify: false,
		chunks: ["404"]
	  }),
	  new HTMLWebpackPlugin({
		template: './about.ejs',
		filename: 'about.html',
		sources: false,
		minify: false,
		chunks: ["about"]
	  }),
  ]
};