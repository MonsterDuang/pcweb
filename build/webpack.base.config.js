const path = require('path')
const webpack = require('webpack')
const pack = require('../package.json')
const config = require('./config')


config.vueConfig.extractCSS = config.isProd

module.exports = {
    entry: {
        app: './src/main.js',
        vendor: ['es6-promise', 'url-search-params', 'vuex-router-sync']
    },
    output: {
        filename: 'js/[name].[hash].js',
        path: path.resolve(__dirname, '../dist'),
        chunkFilename: 'js/[name].[chunkhash].js',
        publicPath: '/pcweb/'
    },
    externals: {
        vue: 'Vue',
        'vue-router': 'VueRouter',
        vuex: 'Vuex',
        axios: 'axios',
        'crypto-js': 'CryptoJS'
    },
    module: {
        noParse: /es6-promise\.js$/,
        rules: [{
                test: /\.vue$/,
                loader: 'vue-loader',
                options: config.vueConfig
            },
            {
                test: /\.js$/,
                use: [{
                    loader: 'buble-loader',
                    options: {
                        objectAssign: 'Object.assign'
                    }
                }],
                exclude: /node_modules/
            },
            {
                test: /\.(png|jpg|gif|svg|webp)$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'img/[name].[ext]?[hash]'
                }
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: 'fonts/[name].[hash:7].[ext]'
                }
            }
        ]
    },
    plugins: [],
    performance: {
        maxEntrypointSize: 300000,
        hints: false
    }
}