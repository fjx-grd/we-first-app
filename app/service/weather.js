'use strict';

module.exports = app => {
  class WeatherService extends app.Service {
    * baidapi(lon, lat) {
      // read config
      var weatherapi = this.app.config.baidu.weatherapi;

      const data = yield this.ctx.curl(`${serverUrl}&location=${lon}|${len}`, {
        dataType: 'json',
      });

      return data;
    }
  }
  return WeatherService;
};