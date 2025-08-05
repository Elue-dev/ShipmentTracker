import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useEffect } from "react";
import "../global.css";

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
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
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="(tabs)" />
      <Stack.Screen
        name="auth/login"
        options={{
          animation: "fade",
        }}
      />
    </Stack>
  );
}
