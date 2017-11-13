'use strict';

module.exports = app => {
  class WeatherService extends app.Service {
    async baidapi(lon, lat) {
      // read config
      var weatherapi = this.app.config.baidu.weatherapi;
      const result = await this.ctx.curl(`${weatherapi}&location=${lon},${lat}`, {
        dataType: 'json',
      });
      console.log(result);
      return result.data;
    }
  }
  return WeatherService;
};