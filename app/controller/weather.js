'use strict';

const Controller = require('egg').Controller;

class WeatherController extends Controller {
  async index() {
    yield ctx.render('weather/index.html');
  }

  async queryWeather() {
    const { ctx, app } = this;
    const { lon, lat } = ctx.request.query;
    const result = yield ctx.service.weather.baidapi(url, data, realIp);
    this.ctx.body = result;
  }

}

module.exports = WeatheController;
