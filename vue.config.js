// vue.config.js
module.exports = {
    publicPath: '/wechat',
    outputDir: 'wechat',
    assetsDir: 'static',
    indexPath: 'index.html',
    css: {
        loaderOptions: {
            less: {
                javascriptEnabled: true,
            },
        },
    },
    devServer: {
        open: true,
        port: '8080',
        // 使用vue的服务器代理跨域
        proxy: {
            '/': {
                target: 'http://124.205.50.152:8080', // 信息港
                changeOrigin: true,
            }
        }
    },
};