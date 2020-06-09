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
            '/front-ecloud': {
                target: 'https://221.176.54.67:31015',
                changeOrigin: true,
                pathRewrite: {
                    '^/front-ecloud': ''
                },
                onProxyReq(proxyReq, req, res) {
                    const cookie = req.headers['cookie'];
                    if (cookie) {
                        console.log(cookie);
                        /* proxyReq.setHeader('Origin', 'http://xx.xx.xx.xx');
                        proxyReq.setHeader('Cookie', 'JSESSIONID=ENGIWNEGSDF');
                        proxyReq.setHeader('X-CSRF-TOKEN', '234dfe-332fwe-2a8sfe');
                        proxyReq.setHeader('Referer', 'http://xx.xx.xx.xx/dwge/setet/fdgweg'); */
                    }
                }
            },
            '/': {
                // target: 'http://10.154.12.211:31186',  // 苏研
                // target: 'https://dev.bcop.com:30228',  // 苏研
                // target: 'http://172.31.191.3:30523', // 信息港
                target: 'https://dev.bcop.com:30523', // 信息港
                changeOrigin: true,
            }
        }
    },
};