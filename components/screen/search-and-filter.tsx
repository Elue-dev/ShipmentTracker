import { IS_IOS_DEVICE } from "@/constants";
import { COLORS } from "@/constants/colors";
import { useFilterStore } from "@/store/filter";
import { SearchAndFilterProps } from "@/types/home/home.types";
import { cn } from "@/utils";
import { Ionicons, Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { TextInput, View } from "react-native";
import Animated, {
  LinearTransition,
  SlideInLeft,
  SlideOutLeft,
} from "react-native-reanimated";
import Button from "../ui/button";
import AppText from "../ui/text";

export default function SearchAndFilter({
  searchQuery,
  setSearchQuery,
  openFiltersSheet,
}: SearchAndFilterProps) {
  const { selectedFilters } = useFilterStore();

  return (
    <View className="mt-6">
      <View
        className={cn(
          "bg-cancelled-bg px-2 py-4 rounded-[13px] flex-row items-start justify-center",
          searchQuery && "border-[1.5px] border-primary-400"
        )}
      >
        <Animated.View layout={LinearTransition.springify().damping(14)}>
          <Image
            source={
              searchQuery
                ? require("@/assets/icons/search-alt.svg")
                : require("@/assets/icons/search.svg")
            }
            style={{ height: 22, width: 25 }}
          />
        </Animated.View>

        <TextInput
          value={searchQuery}
          onChangeText={setSearchQuery}
          className={cn(
            "w-[80%] ml-3  text-primary text-[18.5px] font-Regular",
            IS_IOS_DEVICE ? "mt-[.1px]" : "mt-[-9.9px]"
          )}
          placeholder="Search"
          placeholderTextColor={COLORS.disabled.text2}
        />

        <Animated.View
          entering={SlideInLeft.delay(200)}
          exiting={SlideOutLeft.delay(200)}
          layout={LinearTransition.springify().damping(14)}
        >
          {searchQuery && (
            <Ionicons
              name="close-sharp"
              size={28}
              color={COLORS.primary["400"]}
              onPress={() => setSearchQuery("")}
            />
          )}
        </Animated.View>
      </View>

      <View className="flex-row items-center gap-3">
        <Button
          asChild
          // onPress={() => router.push("/filters")}
          onPress={openFiltersSheet}
          clear
          classNames="flex-row items-center justify-center gap-3 w-[49%] p-4"
        >
          <Animated.View layout={LinearTransition.springify().damping(14)}>
            <Octicons name="filter" size={23} color={COLORS.cancelled.text} />
          </Animated.View>
          <Animated.View layout={LinearTransition.springify().damping(14)}>
            <AppText
              label={
                selectedFilters.length > 0
                  ? `Filters (${selectedFilters.length})`
                  : "Filters"
              }
              classNames="text-cancelled-text text-[19px]"
            />
          </Animated.View>
        </Button>

        <Button
          asChild
          onPress={() => {}}
          classNames="flex-row items-center justify-center gap-3 w-[49%] p-4"
        >
          <Image
            source={require("@/assets/icons/scan-alt.svg")}
            style={{ height: 22, width: 20 }}
          />
          <AppText label="Add Scan" classNames="text-white text-[19px]" />
        </Button>
      </View>
    </View>
  );
}
