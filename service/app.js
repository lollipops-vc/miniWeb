const Koa = require('koa');
const logger = require('koa-logger');
const json = require('koa-json');
const views = require('koa-views');
const onerror = require('koa-onerror');
const bodyParser = require('koa-bodyparser');
const static = require('koa-static');
const cors = require('koa2-cors');
const path = require('path');

const app = new Koa();

const index = require('./routes/index');
const users = require('./routes/users');
const vue2 = require('./routes/vue2');

// error handler
onerror(app);

// global middlewares
app.use(bodyParser());
app.use(json());
app.use(logger());
app.use(cors());

// 日志中间件 - 改为 async/await 语法
app.use(async (ctx, next) => {
  const start = new Date();
  await next();
  const ms = new Date() - start;
  console.log('%s %s - %s', ctx.method, ctx.url, ms);
});

app.use(static(path.join(__dirname, 'public')));
// 视图配置（如果需要）
// app.use(views(path.join(__dirname, 'views'), {
//   extension: 'ejs'
// }));

// routes definition
app.use(index.routes());
app.use(index.allowedMethods());
app.use(users.routes());
app.use(users.allowedMethods());
app.use(vue2.routes());
app.use(vue2.allowedMethods());

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx);
});

module.exports = app;