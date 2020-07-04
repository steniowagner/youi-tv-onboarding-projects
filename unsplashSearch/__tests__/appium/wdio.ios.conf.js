// wdio.dev.config.js
var merge = require('deepmerge');
var wdioConf = require('./wdio.conf.js');

// have main config file as default but overwrite environment specific information
exports.config = merge(wdioConf.config, {
  capabilities: [{
    app: '../../../../../allinone/ios/react/samples/ReactTemplateProject/youi/Debug-iphoneos/unsplashSearch.app',
    automationName: 'YouiEngine',
    deviceName: 'iOS Device',
    platformName: 'ios',
    platformVersion: '<platformVersion>',
    udid: '<udid>',
    xcodeOrgId: '<XcodeOrgId>',
    youiEngineAppAddress: '<DeviceIP>',
    wdaLocalPort: '8100'
  }],

}, { clone: false });
