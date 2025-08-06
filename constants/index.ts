import { Platform } from "react-native";

export const SERVER_URL = "https://shippex-demo.bc.brandimic.com/api/method";
export const IS_IOS_DEVICE = Platform.OS === "ios";
export const IS_ANDROID_DEVICE = Platform.OS === "android";
