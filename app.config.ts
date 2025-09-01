import { ExpoConfig, ConfigContext } from "@expo/config";
import withNativeCameraPlugin from "../native-camera-expo-plugin/build/withNativeCameraPlugin";

export default function (_config: ConfigContext): ExpoConfig {
  let baseConfig: ExpoConfig = {
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
    ios: {
      bundleIdentifier: "com.benkile.reactnativehelloworld"
    },
    android: {
      package: "com.benkile.reactnativehelloworld"
    }
  };

  return withNativeCameraPlugin(baseConfig);
}
