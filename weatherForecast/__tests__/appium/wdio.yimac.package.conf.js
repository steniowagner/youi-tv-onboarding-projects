// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '../../youi/build_osx_Release/Release/weatherForecast',
    automationName: 'YouiEngine',
    deviceName: 'mac-package-release',
    platformName: 'yimac',
    youiEngineAppAddress: 'localhost'
  }],

}, { clone: false });
