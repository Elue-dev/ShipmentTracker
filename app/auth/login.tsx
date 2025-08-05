import AppText from "@/components/ui/text";
import { Image } from "expo-image";
import { View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 bg-primary">
      <View className="items-center justify-center h-screen">
        <AppText>Login</AppText>
        <Image />
      </View>
    </View>
  );
}
