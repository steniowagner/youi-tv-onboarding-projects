Prerequisites
================
1. Node installed (< 11.0).

Prerequisites for iOS/tvOS
================
1. Brew installed (https://brew.sh/).
2. Brew dependencies installed (run `brew bundle` from this Directory).

Steps
================
1. Connect your device to your machine (N/A to mac).
2. Run `npm install` from this Directory.
3. Configure the capabilities for your platform in `wdio.[platformName].conf.js` based on platform requirements:
    1. https://github.com/YOU-i-Labs/appium-youiengine-driver#minimum-required-capabilities-per-platform
4. Run the script by typing `npm run-script <platformName>`.

Currently supported platforms: android, ios, connect-to-app (ignores installer/launcher), yimac, yibluesky, yitvos.

See https://github.com/YOU-i-Labs/appium-youiengine-driver for more details on supported search strategies, commands and attributes.
