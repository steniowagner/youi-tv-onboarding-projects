# You.i Engine One React Native

## Requirements

Run `youi-tv docs` from a command prompt for detailed documentation

## Building - without remote or development bundling

You first need to install the JS dependencies and run the bundling server:

	yarn install
	yarn start

Now, run the following to build and run a YiRN application (in this case on OSX):

	cd youi/
	youi-tv build -p osx
	
At this point you can run the application from commandline from (`youi/build/osx`) or open in your IDE.



## Building - with remote or development bundling

You first need to install the JS dependencies:

	yarn install

Now, run the following to build and run a YiRN application (in this case on OSX):

	cd youi/
	youi-tv build -p osx --local --file index.youi.js
	
At this point you can run the application from commandline from (`youi/build/osx`) or open in your IDE. The application assets will include a bundled copy of the JS application.

To add more capabilities to your app, see the [quickstart guide](https://developer.youi.tv/latest/quickstart/your-first-app/).

Note:
> Ensure that `babel-preset-react-native` is part of package.json for Appium to work with the app you build. If `babel-preset-react-native` is not part of package.json, run `yarn add babel-preset-react-native@4.0.0` on the terminal to add it to package.json.
