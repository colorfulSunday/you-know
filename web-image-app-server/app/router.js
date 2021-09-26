'use strict';

const { init, get, create, list } = require('./util/api');

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/', '/index.html', 302);
  // router.post('/api/add_user', controller.lottery.addUser);// 新增用户
  // 自动产生路由 ——注册通配路由
  router.get('/api/:list/:id', init, get);
  router.get('/api/:list', init, list);
  router.post('/api/:list', init, create);
  // router.put('/api/:list/:id', init, update);
  // router.delete('/api/:list/:id', init, del);
};
