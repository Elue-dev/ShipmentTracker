import HomeHeader from "@/components/screen/home-header";
import SearchAndFilter from "@/components/screen/search-and-filter";
import Shipments from "@/components/screen/shipments";
import ScreenWrapper from "@/components/ui/screen-wrapper";
import { useFilterStore } from "@/store/filter";
import { useShipmentStore } from "@/store/shipment";
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");

  const selectedFilters = useFilterStore((state) => state.selectedFilters);
  const filterShipments = useShipmentStore((state) => state.filterShipments);

  useEffect(() => {
    filterShipments(searchQuery, selectedFilters);
  }, [searchQuery, selectedFilters]);

  return (
    <ScreenWrapper disableScroll>
      <View>
        <HomeHeader />

        <SearchAndFilter
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />

        <Shipments />
      </View>
    </ScreenWrapper>
  );
}
