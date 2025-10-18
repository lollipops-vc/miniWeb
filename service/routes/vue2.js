const Router = require('koa-router');
const router = new Router();
router.prefix('/vue2')//添加路由前缀

router.get('/car/list', async (ctx) => {
  // yield this.render('index', {
  //   title: 'Hello World Koa!'
  // });
  ctx.body = [
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
    {
      img: 'http://localhost:3000/images/car-four.png',
      name: '沃尔沃'
    },
  ]
});
router.get('/new/list', async (ctx) => {
  ctx.body =
    [
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
      {
        img: 'http://localhost:3000/images/car-four.png',
        title: '爱在大草原 吉利豪越的设计师一定是个暖男',
        number: '3026',
        type: '导购',
        status: true
      },
    ]
});

router.get('/rank/list', async (ctx) => {
  ctx.body = [
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
    {
      name: '哈弗H6',
      number: '1111',
      time: '近1年',
    },
  ]
});
router.get('/', async (ctx) => {

});
module.exports = router;
