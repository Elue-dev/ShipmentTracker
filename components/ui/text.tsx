import { TextProps } from "@/types/ui/ui.types";
import { cn } from "@/utils";
import React from "react";
import { Text } from "react-native";

export default function AppText({
  label,
  classNames,
  styles,
  children,
  size,
}: TextProps) {
  return (
    <Text
      className={cn(
        "font-Regular text-[17px] leading-6 text-gray-100",
        ["md", "lg"].includes(size as string) && "font-Bold text-black",
        size === "md" && "text-[28px]",
        size === "lg" && "text-[35px]",
        classNames
      )}
      style={styles}
    >
      {children ?? label}
    </Text>
  );
}
