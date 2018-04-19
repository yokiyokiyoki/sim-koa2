//context主要是一些常用方法的代理，这样我们在request.js里面才可以this.query这样写
const context = {
  get query() {
    return this.request.query;
  }
};
