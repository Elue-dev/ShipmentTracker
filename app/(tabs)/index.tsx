import FiltersSheet from "@/components/screen/filter-sheet";
import HomeHeader from "@/components/screen/home-header";
import SearchAndFilter from "@/components/screen/search-and-filter";
import Shipments from "@/components/screen/shipments";
import { IS_ANDROID_DEVICE } from "@/constants";
import { COLORS } from "@/constants/colors";
import { useFilterStore } from "@/store/filter";
import { useShipmentStore } from "@/store/shipment";
import { cn } from "@/utils";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import * as Haptics from "expo-haptics";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useRef, useState } from "react";
import { RefreshControl, SafeAreaView, ScrollView, View } from "react-native";
import Animated, { FadeIn } from "react-native-reanimated";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [refresh, setRefresh] = useState(false);
  const bottomSheetRef = useRef<BottomSheetModal>(null);

  const selectedFilters = useFilterStore((state) => state.selectedFilters);
  const filterShipments = useShipmentStore((state) => state.filterShipments);
  const filtersUpdated = useFilterStore((state) => state.filtersUpdated);
  const setFiltersUpdated = useFilterStore((state) => state.setFiltersUpdated);
  const clearFilters = useFilterStore((state) => state.clearFilters);
  const [localSelected, setLocalSelected] = useState([...selectedFilters]);

  useEffect(() => {
    filterShipments(searchQuery, selectedFilters);
  }, [searchQuery, selectedFilters]);

  useFocusEffect(
    useCallback(() => {
      if (filtersUpdated) {
        setSearchQuery("");
        setFiltersUpdated(false);
      }
    }, [filtersUpdated])
  );

  function openFiltersSheet() {
    bottomSheetRef.current?.present();
  }

  function handleRefresh() {
    Haptics.selectionAsync();
    setRefresh(true);
    clearFilters();
    setSearchQuery("");
    setLocalSelected([]);
    setTimeout(() => setRefresh(false), 2000);
  }

  return (
    <SafeAreaView className="flex-1 bg-white">
      <Animated.View
        entering={FadeIn.delay(200)}
        className={cn("mx-5", IS_ANDROID_DEVICE ? "mt-[60px]" : "mt-1")}
      >
        <HomeHeader />

        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
          openFiltersSheet={openFiltersSheet}
        />

        <View className="bg-white h-[10px]" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 300 }}
          refreshControl={
            <RefreshControl
              refreshing={refresh}
              onRefresh={handleRefresh}
              progressBackgroundColor={COLORS.primary.DEFAULT}
              tintColor={COLORS.primary.DEFAULT}
              colors={["#fff"]}
            />
          }
        >
          <Shipments searchQuery={searchQuery} />
        </ScrollView>
      </Animated.View>

      <FiltersSheet
        ref={bottomSheetRef}
        localSelected={localSelected}
        setLocalSelected={setLocalSelected}
      />
    </SafeAreaView>
  );
}
