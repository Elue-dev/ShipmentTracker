import ScreenWrapper from "@/components/ui/screen-wrapper";
import AppText from "@/components/ui/text";
import { View } from "react-native";

export default function Wallet() {
  return (
    <ScreenWrapper disableScroll>
      <View className="flex-1 h-screen items-center justify-center">
        <AppText label="Wallet" classNames="font-Bold text-[20px]" />
      </View>
    </ScreenWrapper>
  );
}
