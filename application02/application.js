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
  //处理传进来的回调
  callback() {
    return (req, res) => {};
  }
  //构造ctx
  createContext(req, res) {
    //每个请求都要创建ctx对象
    //this.context是这个ctx对象的原型
    let ctx = Object.create(this.context);
    ctx.request = Object.create(this.request);
    ctx.response = Object.create(this.response);
    //从外面回调那里拿到原生的req
    ctx.req = ctx.request.req = req;
    //从外面回调那里拿到原生的res
    ctx.res = ctx.response.res = res;
    return ctx;
  }
}
