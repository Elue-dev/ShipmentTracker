import Chip from "@/components/ui/chip";
import Divider from "@/components/ui/divider";
import AppText from "@/components/ui/text";
import { IS_IOS_DEVICE } from "@/constants";
import { COLORS } from "@/constants/colors";
import { TAGS } from "@/data/shipment";
import { useFilterStore } from "@/store/filter";
import { FiltersSheetProps, TagStatus } from "@/types/ui/ui.types";
import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { forwardRef, useMemo } from "react";
import { TouchableOpacity, View } from "react-native";

const FiltersSheet = forwardRef<BottomSheetModal, FiltersSheetProps>(
  ({ localSelected, setLocalSelected }, ref) => {
    const { selectedFilters, toggleFilter, setFiltersUpdated } =
      useFilterStore();

    const snapPoints = useMemo(() => ["35%"], []);

    function toggleLocal(tag: TagStatus) {
      setLocalSelected((prev) =>
        prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
      );
    }

    function applyFilters() {
      (ref as any)?.current?.close();
      localSelected.forEach((tag) => {
        if (!selectedFilters.includes(tag)) toggleFilter(tag);
      });

      selectedFilters.forEach((tag) => {
        if (!localSelected.includes(tag)) toggleFilter(tag);
      });

      setFiltersUpdated(true);
    }

    return (
      <BottomSheetModal
        ref={ref}
        index={1}
        snapPoints={snapPoints}
        enablePanDownToClose
        enableContentPanningGesture={IS_IOS_DEVICE}
        enableHandlePanningGesture
        handleIndicatorStyle={{
          backgroundColor: COLORS.disabled.text2,
        }}
        backdropComponent={(props) => (
          <BottomSheetBackdrop
            {...props}
            disappearsOnIndex={-1}
            appearsOnIndex={0}
            opacity={0.6}
          />
        )}
        backgroundStyle={{ backgroundColor: "#fff" }}
      >
        <BottomSheetView className="mx-4">
          <View className="flex-row items-center justify-between  mt-2 mb-3">
            <TouchableOpacity
              onPress={() => (ref as any)?.current?.close()}
              activeOpacity={0.6}
            >
              <AppText primary classNames="font-Medium text-[19px]">
                Cancel
              </AppText>
            </TouchableOpacity>
            <AppText classNames="text-black font-Bold text-[23px]">
              Filters
            </AppText>
            <TouchableOpacity onPress={applyFilters}>
              <AppText primary classNames="font-Medium text-[19px]">
                Done
              </AppText>
            </TouchableOpacity>
          </View>

          <Divider />

          <View className="mt-5">
            <AppText classNames="font-Medium text-[17px]">
              SHIPMENT STATUS
            </AppText>
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
        </BottomSheetView>
      </BottomSheetModal>
    );
  }
);

export default FiltersSheet;
