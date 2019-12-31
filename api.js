const http = require('http')
const fs = require('fs')

// 创建服务
http
  .createServer((req, res) => {
    const { method, url } = req
    if (method === 'GET' && url === '/') {
      fs.readFile('./index.html', (err, data) => {
        // 设置响应头
        res.setHeader('Content-Type', 'text/html')
        res.end(data)
      })
    } else if (method === 'GET' && url === '/api/users') {
      // 设置响应头
      res.setHeader('Set-Cookie', 'token=tokendeas') // 设置cookie
      res.setHeader('Access-Control-Allow-Credentials', 'true') // 设置凭证
      // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3008')
      res.setHeader('Content-Type', 'application/json')
      res.end(JSON.stringify([{ name: 'tom', age: 20 }]))
    }
    // 预检请求处理
    // else if (method === 'OPTIONS' && url === '/api/users') {
    //   res.setHeader('Access-Control-Allow-Credentials', 'true')
    //   res.writeHead(200, {
    //     // 允许跨域访问
    //     'Access-Control-Allow-Origin': 'http://localhost:3008',
    //     // 允许设置X-Token
    //     'Access-Control-Allow-Headers': 'X-Token,Content-Type',
    //     // 允许GET请求
    //     'Access-Control-Allow-Methods': 'GET'
    //   })
    //   res.end()
    // }
  })
  .listen(3006, () => {
    console.log('启动数据提供服务器3006')
  })
