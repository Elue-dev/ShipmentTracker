import { COLORS } from "@/constants/colors";
import { useRouter } from "expo-router";
import React, { useEffect } from "react";
import { Dimensions, StyleSheet } from "react-native";
import Animated, {
  interpolateColor,
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
  withDelay,
  withTiming,
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

export default function SplashScreen() {
  const router = useRouter();

  const scale = useSharedValue(0.5);
  const opacity = useSharedValue(1);
  const translateY = useSharedValue(0);
  const backgroundProgress = useSharedValue(0);

  useEffect(() => {
    scale.value = withTiming(1.5, { duration: 1200 });

    translateY.value = withDelay(
      2000,
      withTiming(-height / 3, { duration: 600 })
    );

    opacity.value = withDelay(2000, withTiming(0, { duration: 600 }));

    backgroundProgress.value = withDelay(
      2000,
      withTiming(1, { duration: 900 }, () => {
        runOnJS(router.replace)("/auth/login");
      })
    );
  }, []);

  const animatedLogoStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }, { translateY: translateY.value }],
    opacity: opacity.value,
  }));

  const animatedContainerStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      backgroundProgress.value,
      [0, 1],
      ["#FFFFFF", COLORS.primary.DEFAULT]
    );
    return { backgroundColor };
  });

  return (
    <Animated.View style={[styles.container, animatedContainerStyle]}>
      <Animated.Image
        source={require("@/assets/images/logo.png")}
        style={[styles.logo, animatedLogoStyle]}
        resizeMode="contain"
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  logo: {
    width: 150,
    height: 150,
  },
});
