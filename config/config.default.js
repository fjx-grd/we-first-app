'use strict';

module.exports = appInfo => {
  const config = exports = {};

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1510542908562_4311';

  // add your config here
  config.middleware = [];

  config.baidu = {
    weatherapi : 'http://api.map.baidu.com/telematics/v3/weather?output=json&ak=899166509d1c7898bbad044a910bffa0'
  }

  return config;
};
