// This section sets up some basic app metadata, the entire section is optional.
App.info({
  id: 'com.liquor.app',
  name: 'ShopSkip',
  version: '2.0.0',
});

// Set up resources such as icons and launch screens.
App.icons({
  /*'app_store': 'resources/icons/ios/app_store.png',
  'iphone_2x': 'resources/icons/ios/iphone_2x.png',
  'iphone_3x': 'resources/icons/ios/iphone_3x.png',
  'ipad_2x': 'resources/icons/ios/ipad_2x.png',
  'ipad_pro': 'resources/icons/ios/ipad_pro.png',

  'ios_settings_2x': 'resources/icons/ios/ios_settings_2x.png',
  'ios_settings_3x': 'resources/icons/ios/ios_settings_3x.png',
  'ios_spotlight_2x': 'resources/icons/ios/ios_spotlight_2x.png',
  'ios_spotlight_3x': 'resources/icons/ios/ios_spotlight_3x.png',
  'ios_notification_2x': 'resources/icons/ios/ios_notification_2x.png',
  'ios_notification_3x': 'resources/icons/ios/ios_notification_3x.png',

  'iphone_notification_2x': 'resources/icons/ios/iphone_notification_2x.png',
  'iphone_notification_3x': 'resources/icons/ios/iphone_notification_3x.png',

  'ipad_notification': 'resources/icons/ios/ipad_notification.png',
  'ipad_notification_2x': 'resources/icons/ios/ipad_notification_2x.png',

  'ipad': 'resources/icons/ios/ipad.png',
  'ios_settings': 'resources/icons/ios/ios_settings.png',
  'ios_spotlight': 'resources/icons/ios/ios_spotlight.png',
  'ios_notification': 'resources/icons/ios/ios_notification.png',
  'iphone_legacy': 'resources/icons/ios/iphone_legacy.png',
  'iphone_legacy_2x': 'resources/icons/ios/iphone_legacy_2x.png',
  'ipad_spotlight_legacy': 'resources/icons/ios/ipad_spotlight_legacy.png',
  'ipad_spotlight_legacy_2x': 'resources/icons/ios/ipad_spotlight_legacy_2x.png',
  'ipad_app_legacy': 'resources/icons/ios/ipad_app_legacy.png',
  'ipad_app_legacy_2x': 'resources/icons/ios/ipad_app_legacy_2x.png',*/

  'android_mdpi': 'resources/icons/android/mipmap-mdpi/ic_launcher.png',
  'android_hdpi': 'resources/icons/android/mipmap-hdpi/ic_launcher.png',
  'android_xhdpi': 'resources/icons/android/mipmap-xdpi/ic_launcher.png',
  'android_xxhdpi': 'resources/icons/android/mipmap-xxdpi/ic_launcher.png',
  'android_xxxhdpi': 'resources/icons/android/mipmap-xxxdpi/ic_launcher.png',

  
});


App.launchScreens({
  /*'iphone5': 'resources/splash/ios/iphone5.png',
  'iphone6': 'resources/splash/ios/iphone6.png',
  'iphone6p_portrait': 'resources/splash/ios/iphone6p_portrait.png',
  'ipad_portrait_2x': 'resources/splash/ios/ipad_portrait_2x.png',
  'iphone_2x': 'resources/splash/ios/iphone_2x.png',
  'ipad_portrait': 'resources/splash/ios/ipad_portrait.png',*/
  'android_mdpi_portrait': 'resources/splash/android/android_mdpi_portrait.png',
  'android_hdpi_portrait': 'resources/splash/android/android_hdpi_portrait.png',
  'android_xhdpi_portrait': 'resources/splash/android/android_xdpi_portrait.png',
  'android_xxhdpi_portrait': 'resources/splash/android/android_xxdpi_portrait.png',
  'android_xxxhdpi_portrait': 'resources/splash/android/android_xxxdpi_portrait.png',
});

App.accessRule('*');
App.accessRule('*://lorempixel.com/*');
App.accessRule('*.google.com/*');
App.accessRule('*.googleapis.com/*');
App.accessRule('*.gstatic.com/*');
App.accessRule('https://maps.googleapis.com/*');
App.accessRule('*.apple.com/*', { launchExternal: true });
App.accessRule('*.google.com/maps/*', { launchExternal: true });
App.accessRule('mailto:*', { launchExternal: true });
App.accessRule('sms:*', { launchExternal: true });
App.accessRule('tel:*', { launchExternal: true });
App.accessRule('http:*', { launchExternal: true });
App.accessRule('https:*', { launchExternal: true });
App.accessRule("blob:*");

// Set PhoneGap/Cordova preferences.
App.setPreference('HideKeyboardFormAccessoryBar', true);
App.setPreference('Orientation', 'default');
App.setPreference('StatusBarBackgroundColor', '#c52128');
App.setPreference('StatusBarOverlaysWebView', false);
App.setPreference('StatusBarStyle', 'lightcontent');
App.setPreference('AndroidLaunchMode', 'singleTask');
App.setPreference('loadUrlTimeoutValue', '700000');
App.setPreference('BackupWebStorage', 'local');
App.setPreference("KeyboardDisplayRequiresUserAction",false);
App.setPreference("SuppressesLongPressGesture", true);

App.setPreference("android-targetSdkVersion", "28");
App.setPreference("android-compileSdkVersion", "28");
/*
App.configurePlugin('phonegap-plugin-push', {
  SENDER_ID: 135864196303
});
*/

App.configurePlugin('cordova-plugin-googleplus', {
  'REVERSED_CLIENT_ID': '125142564517-4nf8llnmi7q6dbj9aee4726td3bbb9vk.apps.googleusercontent.com'
});

App.configurePlugin('phonegap-plugin-push', {
  'SENDER_ID': 125142564517
});


