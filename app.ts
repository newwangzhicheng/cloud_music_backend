import Koa from 'Koa';

const app: Koa = new Koa();

app.use((ctx: Koa.DefaultContext) => {
  ctx.body = 'hello world!';
});

const port = 9999;
app.listen(port, () => {
  console.log('成功运行项目');
  console.log(`http://172.0.0.1:${port}`);
});
