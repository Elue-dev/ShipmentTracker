import HomeHeader from "@/components/screen/home-header";
import SearchAndFilter from "@/components/screen/search-and-filter";
import ScreenWrapper from "@/components/ui/screen-wrapper";
import { useState } from "react";

import { View } from "react-native";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  return (
    <ScreenWrapper disableScroll>
      <View>
        <HomeHeader />
        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
      </View>
    </ScreenWrapper>
  );
}
