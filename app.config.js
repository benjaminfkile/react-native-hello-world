const withNativeCameraPlugin = require("../native-camera-expo-plugin/withNativeCameraPlugin");

/** @type {import('@expo/config').ExpoConfig} */
module.exports = function (config) {
  return {
    ...config,
    android: {
      package: "com.benkile.reactnativehelloworld"
    },
    ios: {
      bundleIdentifier: "com.benkile.reactnativehelloworld"
    },
    name: "react-native-hello-world",
    slug: "react-native-hello-world",
    version: "1.0.0",
    sdkVersion: "53.0.0",
    platforms: ["ios", "android"],
    orientation: "portrait",
    userInterfaceStyle: "light",
    splash: {
      resizeMode: "contain",
      backgroundColor: "#ffffff"
    },
    updates: {
      fallbackToCacheTimeout: 0
    },
    assetBundlePatterns: ["**/*"],

    // Apply your plugin
    ...withNativeCameraPlugin(config)
  };
};
