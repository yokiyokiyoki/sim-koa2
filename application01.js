//封装一下simpleHttp
const http = require("http");

class App {
  constructor() {
    //外面传进来的回调函数
    this.callbackFunc;
  }
  //开启http server,传进来callback
  listen(...args) {
    const server = http.createServer(this.callbackFunc);
    server.listen(...args);
  }
  //挂载回调函数
  use(fn) {
    this.callbackFunc = fn;
  }
}
//这样外面引用可以用require
module.exports = App;
