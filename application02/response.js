const res = {
  get body() {
    return this._body;
  },
  //设置返回给客户端的内容
  set body(data) {
    this._body = data;
  },
  get status() {
    return this.res.statusCode;
  },
  //设置返回客户端的状态码
  set status(code) {
    if (typeof code !== "number") {
      throw new Error("状态码是一个数字");
    }
    this.res.statusCode = code;
  }
};
