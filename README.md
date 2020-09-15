# UN Sustainable Development Goals Mobile Application

## Getting Started

Setting up Android, iOS and React Native can be done in parallel.

### Android

- Install Java.
- Install Android SDK.
- Open Android SDK, install Gradle, Developer Tools, Google Play Services, Android Images etc.

### iOS

- Install Xcode.
- Install CocoaPods.

### React Native

- Install NPM
- Run `npm install -g yarn react-native eslint`
- Download a Javascript Editor or IDE such as Visual Studio Code.

### Setting up an Android Simulator

- In Android Studio, when the Project has finished loading, go to Tools -> AVD Manager.
- Create a Android Image with Google Play Services.
- Optional - Enable HAXM Accelerator using an Android Image with Intel and Installing HAXM Accelerator.

## Development

- Run `yarn start` to start a Node server.
- Run `yarn ios` to deploy to connected iOS Device or Simulator.
- Run `yarn android` to deploy to connected Android Device or Simulator (open AVD beforehand as the command can't open it automatically). 
- Run `yarn test` to run tests.
- Run `yarn e2e` to run end-to-end tests.

## Debugging

### iOS

- Press `Cmd + D` to open the Developer Tools.

### Android

- Press `Cmd + M` to open the Developer Tools.
