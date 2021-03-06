/* eslint valid-jsdoc: "off" */

'use strict';

/**
 * @param {Egg.EggAppInfo} appInfo app info
 */
module.exports = appInfo => {
  /**
   * built-in config
   * @type {Egg.EggAppConfig}
   **/
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1586167541664_1464';

  // add your middleware config here
  config.middleware = ["errorHandler"];

  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  const swaggerdoc = {
    dirScanner: './app/controller',
    apiInfo: {
      title: '用户管理系统接口',
      description: 'swagger-ui for egg', version: '1.0.0',
    },
    schemes: ['http', 'https'],
    consumes: ['application/json'],
    produces: ['application/json'],
    enableSecurity: false,
    // enableValidate: true,
    routerMap: true,
    enable: true,
  };

  const mongoose = {
    url: 'mongodb://127.0.0.1:27017/test',
    options: {
      // useMongoClient: true,
      autoReconnect: true,
      reconnectTries: Number.MAX_VALUE,
      bufferMaxEntries: 0,
    },
  };

  const jwt = {
    secret: 'Great4-M',
    enable: true, // default is false
    match: /^\/api/, // optional
  };

  return {
    ...config,
    ...userConfig,
    swaggerdoc,
    mongoose,
    jwt,
  };
};
