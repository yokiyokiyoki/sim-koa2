//使用原生http模块，为客户端提供响应
const http = require("http");
const server = http.createServer((req, res) => {
  res.writeHead(200);
  res.end("hi yoki");
});
//监听3000端口
server.listen(3000, () => {
  console.log("正在监听3000端口");
});
//此时打开浏览器输入localhost:3000
//客户端就会发来了请求
//这里服务端响应
