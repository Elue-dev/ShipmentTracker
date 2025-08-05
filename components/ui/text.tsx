import { TextProps } from "@/types/ui/ui.types";
import { cn } from "@/utils";
import React from "react";
import { Text } from "react-native";

export default function AppText({
  label,
  classNames,
  styles,
  asChild = true,
  children,
  large,
}: TextProps) {
  return (
    <Text
      className={cn(
        "font-Regular text-[17px] leading-6",
        large ? "font-Bold text-[35px]" : "text-gray-100",
        classNames
      )}
      style={styles}
    >
      {asChild ? children : label}
    </Text>
  );
}
