'use strict';

const Controller = require('egg').Controller;

class WeatherController extends Controller {
  async index() {
    await this.ctx.render('weather/index.html');
  }

  async queryWeather() {
    const { ctx, app } = this;
    const { lon, lat } = ctx.request.query;
    const result = await ctx.service.weather.baidapi(lon, lat);
    this.ctx.body = result;
  }

}

module.exports = WeatherController;
