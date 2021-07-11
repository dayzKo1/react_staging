const proxy = require('http-proxy-middleware')

module.exports = function (app) {
    app.use(proxy('/api1', {                //前缀为api1
        target: 'http://localhost:5000',    //请求转发给谁
        changeOrigin: true,                 //控制服务器收到的请求头中host字段的值
        pathRewrite: { '^/api1': '' }
    })),
    app.use(proxy('/api2', {
        target: 'http://localhost:5001', 
        changeOrigin: true,
        pathRewrite: { '^/api2': '' }
    }))
}