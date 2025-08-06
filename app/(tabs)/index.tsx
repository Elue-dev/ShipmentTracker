import HomeHeader from "@/components/screen/home-header";
import SearchAndFilter from "@/components/screen/search-and-filter";
import Shipments from "@/components/screen/shipments";
import { useFilterStore } from "@/store/filter";
import { useShipmentStore } from "@/store/shipment";
import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { SafeAreaView, ScrollView, View } from "react-native";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const selectedFilters = useFilterStore((state) => state.selectedFilters);
  const filterShipments = useShipmentStore((state) => state.filterShipments);
  const filtersUpdated = useFilterStore((state) => state.filtersUpdated);
  const setFiltersUpdated = useFilterStore((state) => state.setFiltersUpdated);

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

  return (
    <SafeAreaView className="flex-1 bg-white">
      <View className="mx-5 mt-1">
        <HomeHeader />

        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <View className="bg-white h-[10px]" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 300 }}
        >
          <Shipments />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
