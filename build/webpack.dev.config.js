const base = require("./webpack.base.config");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const config = require('./config');
const FriendlyErrorsPlugin = require('friendly-errors-webpack-plugin')

base.plugins = (base.plugins || []).concat([
    new HtmlWebpackPlugin({
        template: './src/index.template.html',
        inject: true
    }),
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
        name: "vendor"
    }),
    new webpack.optimize.CommonsChunkPlugin({
        name: "manifest",
        minChunks: Infinity
    }),
    new webpack.HotModuleReplacementPlugin(),
    new FriendlyErrorsPlugin()
])

base.devServer = {
    hot: true,
    compress: true,
    inline: true,
    port: config.dev.port,
    host: config.dev.host,
    noInfo: true,
    allowedHosts: config.dev.allowedHosts,
    proxy: {
        "/api": {
            target: "http://49.4.13.104"
        }
    },
    historyApiFallback: true
}

base.devtool = '#cheap-module-source-map'


module.exports = base