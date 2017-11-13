'use strict';

module.exports = app => {
  app.get('/weather', app.controller.weather.index);
  app.get('/weather/query', app.controller.weather.queryWeather);
  app.get('/', app.controller.home.index);
};
