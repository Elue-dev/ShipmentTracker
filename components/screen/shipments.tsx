import { useShipmentStore } from "@/store/shipment";
import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import AppText from "../ui/text";
import ShipmentCard from "./shipment-card";

export default function Shipments({ searchQuery }: { searchQuery: string }) {
  const [checkedAWBs, setCheckedAWBs] = useState<string[]>([]);
  const { shipments, filteredShipments, hasFiltered } = useShipmentStore();
  const displayShipments = hasFiltered ? filteredShipments : shipments;

  const isAllChecked = checkedAWBs.length === displayShipments.length;

  const toggleMarkAll = () => {
    if (isAllChecked) {
      setCheckedAWBs([]);
    } else {
      setCheckedAWBs(displayShipments.map((s) => s.awb));
    }
  };

  function toggleChecked(awb: string) {
    setCheckedAWBs((prev) =>
      prev.includes(awb) ? prev.filter((id) => id !== awb) : [...prev, awb]
    );
  }

  return (
    <View className="pt-5">
      <View className="flex-1">
        <View className="flex-row items-center justify-between">
          <AppText label="Shipments" size="md" />

          {filteredShipments.length > 0 && (
            <TouchableOpacity
              className="flex-row items-center gap-2"
              onPress={toggleMarkAll}
              activeOpacity={0.7}
            >
              <Image
                source={
                  isAllChecked
                    ? require("@/assets/icons/checkbox-active.svg")
                    : require("@/assets/icons/checkbox.svg")
                }
                style={{ width: 20, height: 20 }}
              />
              <AppText label="Mark All" primary />
            </TouchableOpacity>
          )}
        </View>

        <View className="mt-5">
          <FlatList
            data={displayShipments}
            keyExtractor={(s) => s.awb}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ item, index }) => (
              <ShipmentCard
                index={index}
                shipment={item}
                checked={checkedAWBs.includes(item.awb)}
                onToggleChecked={() => toggleChecked(item.awb)}
              />
            )}
            ListEmptyComponent={() =>
              hasFiltered ? (
                <View className="mt-10 items-center">
                  <Image
                    source={require("@/assets/icons/shipment-box.png")}
                    style={{ width: 60, height: 60 }}
                  />

                  <AppText
                    centered
                    label={
                      searchQuery
                        ? "No shipments found for your search. Try searching for something else"
                        : "No shipments found for your filter. Update your filters and try again"
                    }
                    classNames="mt-3 max-w-[80%]"
                  />
                </View>
              ) : null
            }
          />
        </View>
      </View>
    </View>
  );
}
