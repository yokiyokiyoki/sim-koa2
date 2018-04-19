//context主要是一些常用方法的代理，这样我们在request.js里面才可以this.query这样写
//通过context.query直接代理了context.request.query，context.body和context.status代理了context.response.body与context.response.status。而context.request，context.response则会在application.js中挂载
const context = {
  get query() {
    return this.request.query;
  },
  get body() {
    return this.response.body;
  },

  set body(data) {
    this.response.body = data;
  },

  get status() {
    return this.response.status;
  },

  set status(statusCode) {
    this.response.status = statusCode;
  }
};
