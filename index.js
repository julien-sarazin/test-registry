const registry = require('yemma');

registry
  .on(registry.events.started, app => console.log('Registry started on port', app.settings.port))
  .start();
