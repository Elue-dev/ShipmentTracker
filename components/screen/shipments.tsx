import { useShipmentStore } from "@/store/shipment";
import { Image } from "expo-image";
import { useState } from "react";
import { FlatList, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../ui/screen-wrapper";
import AppText from "../ui/text";
import ShipmentCard from "./shipment-card";

export default function Shipments() {
  const [checkedAWBs, setCheckedAWBs] = useState<string[]>([]);

  const shipments = useShipmentStore((state) =>
    state.filteredShipments.length > 0
      ? state.filteredShipments
      : state.shipments
  );

  function toggleMarkAll() {
    if (checkedAWBs.length === shipments.length) {
      setCheckedAWBs([]);
    } else {
      setCheckedAWBs(shipments.map((s) => s.awb));
    }
  }

  const toggleChecked = (awb: string) => {
    setCheckedAWBs((prev) =>
      prev.includes(awb) ? prev.filter((id) => id !== awb) : [...prev, awb]
    );
  };

  const isAllChecked = checkedAWBs.length === shipments.length;

  return (
    <ScreenWrapper noMargin classNames="pt-8">
      <View>
        <View className="flex-row items-center justify-between">
          <AppText label="Shipments" size="md" />

          <View className="flex-row items-center justify-between gap-2">
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
          </View>
        </View>

        <View className="mt-5">
          <FlatList
            data={shipments}
            keyExtractor={(shipments) => shipments.awb}
            showsVerticalScrollIndicator={false}
            scrollEnabled={false}
            renderItem={({ item }) => (
              <ShipmentCard
                shipment={item}
                checked={checkedAWBs.includes(item.awb)}
                onToggleChecked={() => toggleChecked(item.awb)}
              />
            )}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}
