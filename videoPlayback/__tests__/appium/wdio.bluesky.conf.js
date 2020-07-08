// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '<PathToApp>',
    automationName: 'YouiEngine',
    deviceName: 'BlueSky',
    password: '<YourPassword>',
    platformName: 'bluesky',
    username: "rokudev",
    youiEngineAppAddress: '<DeviceIP>'
  }],

}, { clone: false });
