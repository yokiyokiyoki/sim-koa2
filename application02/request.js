const url = require("url");
const req = {
  //用url.parse解析url成为一个对象，拿到其中的query
  get query() {
    return url.parse(this.req.url, true).query;
  }
};
