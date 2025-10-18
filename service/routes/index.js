var router = require('koa-router')();

router.get('/', function *(next) {
  // yield this.render('index', {
  //   title: 'Hello World Koa!'
  // });
  this.body = 'this is so cool！!';
});

router.get('/foo', function *(next) {
  yield this.render('index', {
    title: 'Hello World foo!'
  });
});

module.exports = router;
