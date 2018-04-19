//封装一下simpleHttp
const http = require("http");

class App {
  constructor() {
    //外面传进来的回调函数
    this.callbackFunc;
  }
  //   开启http server
  listen(...args) {
    const server = http.createServer(this.callbackFunc);
    server.listen(...args);
  }
}
