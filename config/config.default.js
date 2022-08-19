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
  config.keys = appInfo.name + '_1660890164180_8647';

  // add your middleware config here
  config.middleware = [];
  config.mongoose = {
    url: 'mongodb://localhost:27017',
    options: {
      useUnifiedTopology: true,
      user: 'root',
      pass: '20220407You@',
      dbName: 'dev-cli',
    },
  };
  // add your user config here
  const userConfig = {
    // myAppName: 'egg',
  };

  return {
    ...config,
    ...userConfig,
  };
};
