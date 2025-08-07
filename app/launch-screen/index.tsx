import Button from "@/components/ui/button";
import { Image } from "expo-image";
import { useRouter } from "expo-router";
import { View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function LaunchScreen() {
  const router = useRouter();

  return (
    <Animated.View
      entering={FadeIn.delay(200)}
      className="flex-1 bg-primary px-4 pt-10 pb-8"
    >
      <View className="flex-1 justify-between">
        <View className="flex-1 items-center justify-center">
          <Image
            source={require("@/assets/images/logo-alt.png")}
            style={{ height: 40, width: "70%" }}
          />
        </View>

        <View className="mx-3 mb-7">
          <Button
            label="Login"
            inverted
            onPress={() => router.push("/auth/login")}
          />
        </View>
      </View>
    </Animated.View>
  );
}
