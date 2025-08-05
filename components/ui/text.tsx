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
}: TextProps) {
  return (
    <Text className={cn("font-Regular", classNames)} style={styles}>
      {asChild ? children : label}
    </Text>
  );
}
