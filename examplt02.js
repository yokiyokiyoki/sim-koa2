const koa = require("./application02/application");
const app = new koa();

//这里是async 函数,然后then里面执行抛出body内容出去
app.use(ctx => {
  ctx.body = "hi" + ctx.query.name;
});

app.listen(3000, () => {
  console.log("正在监听3000端口");
});
