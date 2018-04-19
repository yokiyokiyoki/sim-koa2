// koa有三个重要对象，request，response，context
//封装node原生的request对象，封装node原生的response对象
//context是回调函数上下文,挂在了koa的req和res对象
//通过对象getter和setter来封装

const http = require("http");
const context = require("./context02");
const request = require("./request");
const response = require("./response");

class App {
  constructor() {
    //声明传进来的回调
    this.callbackFunc;
    this.context = context;
    this.request = request;
    this.response = response;
  }
  //监听端口，开启服务
  listen(...args) {
    let server = http.createServer(this.callbackFunc);
    server.listen(...args);
  }
  //挂载回调
  use(fn) {
    this.callbackFunc = fn;
  }
}
