// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '../../youi/build_android_Release/project/yirntemplateapp/build/outputs/apk/release/yirntemplateapp-release.apk',
    automationName: 'YouiEngine',
    deviceName: 'android-package-release',
    fullReset: true,
    platformName: 'android',
    youiEngineAppAddress: '10.100.89.173'
  }],

}, { clone: false });
