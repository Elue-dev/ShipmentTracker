import Chip from "@/components/ui/chip";
import Divider from "@/components/ui/divider";
import AppText from "@/components/ui/text";
import { TAGS } from "@/data/shipment";
import { useFilterStore } from "@/store/filter";
import { TagStatus } from "@/types/ui/ui.types";
import { useRouter } from "expo-router";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";

export default function Filters() {
  const router = useRouter();
  const { selectedFilters, toggleFilter } = useFilterStore();
  const [localSelected, setLocalSelected] = useState([...selectedFilters]);

  const toggleLocal = (tag: TagStatus) => {
    setLocalSelected((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const applyFilters = () => {
    localSelected.forEach((tag) => {
      if (!selectedFilters.includes(tag)) toggleFilter(tag);
    });

    selectedFilters.forEach((tag) => {
      if (!localSelected.includes(tag)) toggleFilter(tag);
    });

    router.back();
  };

  return (
    <View className="flex-1 bg-[#fff]">
      <View className="flex-row items-center justify-between mx-5 mt-5 mb-3">
        <TouchableOpacity onPress={() => router.back()}>
          <AppText primary classNames="font-Medium text-[19px]">
            Cancel
          </AppText>
        </TouchableOpacity>
        <AppText classNames="text-black font-Bold text-[23px]">Filters</AppText>
        <TouchableOpacity onPress={applyFilters}>
          <AppText primary classNames="font-Medium text-[19px]">
            Done
          </AppText>
        </TouchableOpacity>
      </View>

      <Divider />

      <View className="mt-5 mx-5">
        <AppText classNames="font-Medium text-[17px]">SHIPMENT STATUS</AppText>
        <View className="flex-row flex-wrap gap-5 mt-4">
          {TAGS.map((tag) => (
            <Chip
              label={tag}
              key={tag}
              selected={localSelected.includes(tag)}
              onToggle={() => toggleLocal(tag)}
            />
          ))}
        </View>
      </View>
    </View>
  );
}
