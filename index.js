const registry = require('yemma');

registry
  .on(registry.events.started, app => console.log('Registry started on port', app.settings.port))
  .on(registry.events.init.settings, app => settings => {
    console.log('settings', settings);
    settings.port = process.env.PORT
  })
  .start();
