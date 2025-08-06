import AppText from "@/components/ui/text";
import { COLORS } from "@/constants/colors";
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import { Stack, useRouter } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Platform, Pressable } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const router = useRouter();
  const [loaded, error] = useFonts({
    Regular: require("../assets/fonts/SFPRODISPLAYREGULAR.otf"),
    Medium: require("../assets/fonts/SFPRODISPLAYMEDIUM.otf"),
    Bold: require("../assets/fonts/SFPRODISPLAYBOLD.otf"),
  });

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync();
    }
  }, [loaded, error]);

  if (!loaded && !error) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <StatusBar style="dark" />
      <Stack
        initialRouteName="splash"
        screenOptions={{ headerShown: false, animation: "slide_from_left" }}
      >
        <Stack.Screen name="(tabs)" />
        <Stack.Screen name="splash" />
        <Stack.Screen
          name="launch-screen/index"
          options={{
            animation: "fade",
          }}
        />
        <Stack.Screen
          name="auth/login"
          options={{
            headerShown: true,
            headerTitle: "",
            headerBackVisible: true,
            headerBackTitle: "Cancel",
            presentation: Platform.select({
              android: "formSheet",
              ios: "modal",
            }),
            sheetGrabberVisible: true,
            contentStyle: {
              flex: 1,
              backgroundColor: "#fff",
            },
            headerLeft: () => (
              <Pressable
                onPress={() => router.back()}
                className="flex-row items-center"
              >
                <Ionicons
                  name="chevron-back"
                  size={24}
                  color={COLORS.primary.DEFAULT}
                />
                <AppText classNames="text-primary text-[18px] mt-[1px]">
                  Cancel
                </AppText>
              </Pressable>
            ),
          }}
        />

        <Stack.Screen
          name="filters/index"
          options={{
            presentation: "formSheet",
            sheetGrabberVisible: true,
            sheetAllowedDetents: "fitToContents",
            contentStyle: {
              backgroundColor: "#fff",
            },
          }}
        />
      </Stack>
    </SafeAreaProvider>
  );
}
