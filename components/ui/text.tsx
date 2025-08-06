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
  primary,
}: TextProps) {
  return (
    <Text
      className={cn(
        "font-Regular text-[18px] leading-6 text-gray-100",
        ["md", "lg"].includes(size as string) && "font-Bold text-black",
        size === "md" && "text-[28px]",
        size === "lg" && "text-[35px]",
        primary && "text-primary",
        classNames
      )}
      style={styles}
    >
      {children ?? label}
    </Text>
  );
}
