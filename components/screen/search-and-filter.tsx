import { COLORS } from "@/constants/colors";
import { SearchAndFilterProps } from "@/types/home/home.types";
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
}: SearchAndFilterProps) {
  return (
    <View className="mt-6">
      <View className="bg-cancelled-bg px-2 py-5 rounded-[13px] flex-row items-start justify-center">
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
          className="w-[80%] ml-3 mt-[1.5px] text-primary text-[18.5px] font-Regular"
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
          onPress={() => {}}
          clear
          classNames="flex-row items-center justify-center gap-3 w-[49%]"
        >
          <Octicons name="filter" size={23} color={COLORS.cancelled.text} />
          <AppText
            label="Filters"
            classNames="text-cancelled-text text-[19px]"
          />
        </Button>

        <Button
          asChild
          onPress={() => {}}
          classNames="flex-row items-center justify-center gap-3 w-[49%]"
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
