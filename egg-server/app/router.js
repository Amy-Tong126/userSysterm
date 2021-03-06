'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.get('/', controller.home.index);
  router.get('/user', controller.user.index);
  router.post('/login', controller.userAccess.login);
  router.post('/logout', controller.userAccess.logout);
  router.post('/upload', controller.upload.create);
};
