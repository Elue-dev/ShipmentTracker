import Button from "@/components/ui/button";
import { Text, View } from "react-native";

export default function Login() {
  return (
    <View className="flex-1 ">
      <View className="items-center justify-center h-screen">
        <Text className="text-white">LOGIN</Text>

        <Button label="Login" onPress={() => {}} />
      </View>
    </View>
  );
}
