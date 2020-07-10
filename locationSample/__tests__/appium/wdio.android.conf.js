// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '../../youi/build/android/project/ReactTemplateProject/build/outputs/apk/arm64-v8a/debug/locationSample-arm64-v8a-debug.apk',
    automationName: 'YouiEngine',
    deviceName: '<DeviceName>',
    fullReset: true,
    platformName: 'android',
    udid: '<DeviceUDID>',
    youiEngineAppAddress: '<DeviceIP>'
  }],

}, { clone: false });
