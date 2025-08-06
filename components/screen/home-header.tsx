import { user } from "@/data/user";
import { Image } from "expo-image";
import { View } from "react-native";
import AppText from "../ui/text";

export default function HomeHeader() {
  return (
    <View>
      <View className="flex-row items-center justify-between">
        <Image source={user.avatar} style={{ height: 45, width: 45 }} />

        <Image
          source={require("@/assets/images/logo-alt.svg")}
          style={{ height: 20, width: 150 }}
        />

        <View className="bg-cancelled-bg rounded-full p-2">
          <Image
            source={require("@/assets/icons/bell.svg")}
            style={{ height: 25, width: 25 }}
          />
        </View>
      </View>

      <View className="mt-6">
        <AppText label="Hello," classNames="text-[20px]" />
        <AppText large label={user.name} size="lg" />
      </View>
    </View>
  );
}
