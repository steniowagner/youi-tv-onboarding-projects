// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: 'dummy',
    automationName: 'YouiEngine',
    deviceName: 'Device',
    platformName: 'connecttoapp',
    youiEngineAppAddress: '<IPAddress>'
  }],

}, { clone: false });
