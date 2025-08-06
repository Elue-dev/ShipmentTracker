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
  centered,
}: TextProps) {
  return (
    <Text
      className={cn(
        "font-Regular text-[18px] leading-6 text-gray-100",
        ["md", "lg", "xlg"].includes(size as string) && "font-Bold text-black",
        size === "md" && "text-[22px]",
        size === "lg" && "text-[26px]",
        size === "xlg" && "text-[35px]",
        centered && "text-center",
        primary && "text-primary",
        classNames
      )}
      style={styles}
    >
      {children ?? label}
    </Text>
  );
}
