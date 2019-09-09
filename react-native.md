# React Native

## Frameworks
 - How to configure development environment, [official documentation](https://facebook.github.io/react-native/docs/getting-started.html).
 - Components and APIs list, [official documentation](https://facebook.github.io/react-native/docs/activityindicator). 
 - [Official introducing tutorial.](https://facebook.github.io/react-native/docs/tutorial)
 - [Official guides](https://facebook.github.io/react-native/docs/optimizing-flatlist-configuration).
 - [Expo official documentation](https://docs.expo.io/versions/latest/).
 - Framework for creating cross-platform applications on the React Native - [ReNative](https://github.com/pavjacko/renative#readme).
 
 ## Libraries, collections.
 - Most needed library for a navigation in an application, [React Navigation](https://reactnavigation.org/docs/en/getting-started.html), already integrated to Expo.
 - Libraries catalog, tutorials, guidelines: 
	 - https://github.com/jondot/awesome-react-native  
	 - [https://github.com/enaqx/awesome-react](https://github.com/enaqx/awesome-react)
 - Libraries catalog with quality indicator: https://www.native.directory/
 - Large UI components catalog: https://github.com/madhavanmalolan/awesome-reactnative-ui

---

## Preparing and setting environment from official React Native documentation.

### React Native CLI Quickstart ("clear" React Native) for MacOS.

#### 1. Install needed utilities and libraries with [homebrew](https://brew.sh/).
Run the following commands in a Terminal after installing Homebrew:

	    brew install yarn
        brew install node
        brew install watchman
        brew tap AdoptOpenJDK/openjdk
        brew cask install adoptopenjdk8

 #### 2. Install react-native-cli.
`npm install -g react-native-cli`

 #### 3. Configure development environment
   i) For **iOS**.
- Update MacOS to last version.
- Install last version of xCode via Mac App Store.
- Activate **Command Line Tools** 
 ![enter image description here](https://facebook.github.io/react-native/docs/assets/GettingStartedXcodeCommandLineTools.png)
 ii) For **Android**.
 - Install [Android Studio](https://developer.android.com/studio/index.html). Choose a "Custom" setup when prompted to select an installation type. Make sure the boxes next to all of the following are checked:
 
	 - List item
	 - Android SDK
	 - Android SDK Platform
	 - Performance (Intel ® HAXM) (See here for AMD)
	 - Android Virtual Device
 
	 Then, click "Next" to install all of these components.
 - Install the Android SDK:

>  The SDK Manager can also be found within the Android Studio
> "Preferences" dialog, under **Appearance & Behavior** → **System
> Settings** → **Android SDK**.
> 
Select the "SDK Platforms" tab from within the SDK Manager, then check the box next to "Show Package Details" in the bottom right corner. Look for and expand the Android 9 (Pie) entry, then make sure the following items are checked:

 -- Android SDK Platform 28
 -- Intel x86 Atom_64 System Image or Google APIs Intel x86 Atom System Image

 - Configure the ANDROID_HOME environment variable
 Add the following lines to your `$HOME/.bash_profile` or `$HOME/.bashrc` config file:

 #### 4. Creating a new application or open existing.
 `react-native init ProjectName` 

 #### 5. Running your React Native application.

 - `cd ProjectName`
 - `yarn` or `npm install`
 - `react-native run-ios` or `react-native run-android`


### Expo CLI Quickstart  for MacOS.

#### 1. Assuming that you have [Node 10 LTS](https://nodejs.org/en/download/) or greater installed, you can use npm to install the Expo CLI command line utility:

    npm install -g expo-cli
#### 2. Creating a new application or open existing.
 `expo-cli init ProjectName` 

#### 3. Running your React Native application.
 - `cd ProjectName`
 - `yarn` or `npm install`
 - `expo start --ios` or `expo start --android`