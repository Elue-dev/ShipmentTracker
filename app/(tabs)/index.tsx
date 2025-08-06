import HomeHeader from "@/components/screen/home-header";
import ScreenWrapper from "@/components/screen/screen-wrapper";

import { View } from "react-native";

export default function Home() {
  return (
    <ScreenWrapper>
      <View>
        <HomeHeader />
      </View>
    </ScreenWrapper>
  );
}
