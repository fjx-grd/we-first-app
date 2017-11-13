'use strict';

module.exports = app => {
  app.get('/werther', app.controller.werther.index);
  app.get('/', app.controller.home.index);
};
