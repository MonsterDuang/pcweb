module.exports = {
    vueConfig: {
        preserveWhitespace: false,
        extractCSS: true,
        postcss: [
            require('autoprefixer')({
                browsers: ['last 3 versions']
            }),
            require('cssnano')({
                safe: true
            })
        ]
    },
    dev: {
        port: 80,
        host: 'www.aworld.cn'
    },
    isProd: process.env.NODE_ENV === 'production'
}