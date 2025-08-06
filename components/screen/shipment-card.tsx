import { COLORS } from "@/constants/colors";
import { ShipmentCardProps } from "@/types/home/home.types";
import { cn } from "@/utils";
import { Octicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import React, { useState } from "react";
import { TouchableOpacity, View } from "react-native";
import Animated, {
  FadeInDown,
  FadeOutDown,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from "react-native-reanimated";
import Button from "../ui/button";
import DashedSeperator from "../ui/dashed-seperator";
import Tag from "../ui/tags";
import AppText from "../ui/text";

export default function ShipmentCard({
  index,
  shipment,
  checked,
  onToggleChecked,
}: ShipmentCardProps) {
  const [expanded, setExpanded] = useState(false);
  const height = useSharedValue(0);
  const opacity = useSharedValue(0);

  function toggle() {
    setExpanded((prev) => !prev);
    height.value = withTiming(expanded ? 0 : 145, { duration: 300 });
    opacity.value = withTiming(expanded ? 0 : 1, { duration: 300 });
  }

  const animatedStyle = useAnimatedStyle(() => ({
    height: height.value,
    opacity: opacity.value,
    overflow: "hidden",
  }));

  return (
    <Animated.View
      entering={FadeInDown.delay(index * 100)}
      exiting={FadeOutDown.delay(index * 100)}
      className={cn(
        "rounded-[13px] mb-4 overflow-hidden bg-cancelled-bg",
        checked && "border-[1.5px] border-primary-400"
      )}
    >
      <View className="px-3 py-4">
        <View className="flex-row items-center gap-4">
          <TouchableOpacity onPress={onToggleChecked} activeOpacity={0.7}>
            <Image
              source={
                checked
                  ? require("@/assets/icons/checkbox-active.svg")
                  : require("@/assets/icons/checkbox.svg")
              }
              style={{ width: 18, height: 18 }}
            />
          </TouchableOpacity>

          <Image
            source={require("@/assets/icons/shipment-box.png")}
            style={{ width: 30, height: 30 }}
          />

          <View className="flex-1">
            <AppText label="AWB" classNames="text-[15px] font-SemiBold" />
            <AppText
              label={shipment.awb}
              classNames="text-black text-[19px] font-Bold"
            />
            <View className="flex-row items-center gap-[4px]">
              <AppText label={shipment.origin.city} classNames="text-[16px]" />
              <Octicons
                name="arrow-right"
                size={14}
                color={COLORS.primary.DEFAULT}
              />
              <AppText
                label={shipment.destination.city}
                classNames="text-[16px]"
              />
            </View>
          </View>

          <Tag status={shipment.status} />

          <TouchableOpacity onPress={toggle} activeOpacity={0.6}>
            <Image
              source={
                expanded
                  ? require("@/assets/icons/shipment-reveal-focused.svg")
                  : require("@/assets/icons/shipment-reveal.svg")
              }
              style={{ width: 25, height: 28 }}
            />
          </TouchableOpacity>
        </View>
      </View>

      <Animated.View style={[animatedStyle]} className="bg-[#f8f8f9] px-4">
        <View className="mt-[-10px]">
          <DashedSeperator />
        </View>
        <View className="flex-row items-center justify-between">
          <View className="mt-4">
            <AppText label="Origin" primary classNames="text-[13px]" />
            <AppText label={shipment.origin.city} classNames="text-black" />
            <AppText label={shipment.origin.address} classNames="text-[15px]" />
          </View>
          <Octicons
            name="arrow-right"
            size={18}
            color={COLORS.primary.DEFAULT}
          />
          <View>
            <AppText label="Destination" primary classNames="text-[13px]" />
            <AppText
              label={shipment.destination.city}
              classNames="text-black"
            />
            <AppText
              label={shipment.destination.address}
              classNames="text-[15px]"
            />
          </View>
        </View>

        <View className="flex-row self-end gap-3 pb-6">
          <Button
            asChild
            onPress={() => {}}
            flexed
            lightBlue
            classNames="p-3 w-[30%]"
          >
            <Image
              source={require("@/assets/icons/phone.svg")}
              style={{ width: 20, height: 20 }}
            />

            <AppText label="Call" classNames="text-white" />
          </Button>

          <Button
            asChild
            onPress={() => {}}
            flexed
            success
            classNames="p-3 w-[35%]"
          >
            <Image
              source={require("@/assets/icons/whatsapp.svg")}
              style={{ width: 20, height: 20 }}
            />

            <AppText label="WhatsApp" classNames="text-white" />
          </Button>
        </View>
      </Animated.View>
    </Animated.View>
  );
}
