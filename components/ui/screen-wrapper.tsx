import { IS_IOS_DEVICE } from "@/constants";
import { COLORS } from "@/constants/colors";
import { ScrollViewProps } from "@/types/ui/ui.types";
import { RefreshControl, ScrollView, View } from "react-native";

export default function ScreenWrapper({
  children,
  noMargin,
  containerStyles,
  disableScroll = false,
  wouldRefresh = false,
  refresh,
  handleRefresh,
}: ScrollViewProps) {
  return (
    <View className="flex-1 bg-white">
      <ScrollView
        scrollEnabled={!disableScroll}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          flexGrow: 1,
          paddingBottom: IS_IOS_DEVICE ? 200 : 160,
          marginTop: noMargin ? 0 : IS_IOS_DEVICE ? 50 : 0,
          marginHorizontal: noMargin ? 0 : 15,
          ...containerStyles,
        }}
        refreshControl={
          wouldRefresh ? (
            <RefreshControl
              refreshing={refresh ?? false}
              onRefresh={handleRefresh}
              progressBackgroundColor={COLORS.primary.DEFAULT}
              tintColor={COLORS.primary.DEFAULT}
            />
          ) : undefined
        }
      >
        {children}
      </ScrollView>
    </View>
  );
}
