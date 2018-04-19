const koa = require("./application01");
const app = new koa();

app.use((req, res) => {
  res.writeHead(200);
  res.end("hi yoki");
});

app.listen(3000, () => {
  console.log("正在监听3000端口");
});
