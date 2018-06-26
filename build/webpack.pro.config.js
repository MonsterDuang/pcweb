const base = require("./webpack.base.config");
const webpack = require("webpack");
const vueConfig = require('./config').vueConfig;
const CleanWebpackPlugin = require('clean-webpack-plugin')
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path')

base.output.filename = base.output.filename.replace('hash', 'chunkhash')

base.output.publicPath = '/pcweb/'

vueConfig.loaders = {
    stylus: ExtractTextPlugin.extract({
        use: 'css-loader!stylus-loader?minimize',
        fallback: 'vue-style-loader'
    })
}

const config = Object.assign({}, base, {
    plugins: [
        new webpack.DefinePlugin({
            "process.env.NODE_ENV": JSON.stringify('production')
        }),
        new ExtractTextPlugin("css/style.[chunkhash].css", {
            allChunks: true
        }),
        new webpack.NoEmitOnErrorsPlugin(),
        new CleanWebpackPlugin(['dist'], {
            root: path.resolve(__dirname, '../')
        }),
        new webpack.HashedModuleIdsPlugin(),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor'
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: "runtime"
        }),
        new HtmlWebpackPlugin({
            filename: "./index.html",
            template: "./src/index.template.html",
            inject: true,
            cache: true,
            minify: {
                removeComments: true,
                collapseWhitespace: false
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new CopyWebpackPlugin([{
            from: 'static',
            to: 'static'
        }])
    ],
    devtool: false
});

if (process.env.npm_config_report) {
    config.plugins.push(new BundleAnalyzerPlugin())
}

module.exports = config;