import { ButtonProps } from "@/types/ui/ui.types";
import { cn } from "@/utils";
import { Fragment } from "react";
import { ActivityIndicator, Text, TouchableOpacity } from "react-native";

export default function Button({
  onPress,
  isLoading,
  label,
  full = true,
  classNames,
  disabled,
  outlined,
  asChild = false,
  children,
  styles = {},
  centered = false,
  danger = false,
  uppercased = false,
  softBg = false,
  inverted = false,
  clear = false,
  lightBlue = false,
  success = false,
  flexed = false,
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      style={styles}
      className={cn(
        "bg-primary p-5 rounded-[13px] mt-5 font-semibold min-w-[100px]",
        isLoading && "opacity-70",
        inverted && "bg-white",
        clear && "bg-cancelled-bg",
        outlined && "bg-transparent border border-primary",
        softBg && "bg-primary-300",
        disabled && "bg-disabled-bg border-0",
        lightBlue && "bg-primary-400",
        success && "bg-success-solid",
        danger && "bg-[#c81e1e]",
        centered && "self-center",
        full ? "w-full" : "w-[50%]",
        flexed && "flex-row items-center justify-center gap-3",
        classNames
      )}
      onPress={disabled ? () => {} : onPress}
      disabled={isLoading}
    >
      {asChild ? (
        children
      ) : (
        <Fragment>
          {isLoading ? (
            <ActivityIndicator color="#fff" size="small" />
          ) : (
            <Text
              className={cn(
                "text-white text-[19px] text-center font-Medium",
                outlined && "text-primary",
                disabled && "text-disabled-text2",
                uppercased && "uppercase",
                (softBg || inverted) && "text-primary"
              )}
            >
              {label}
            </Text>
          )}
        </Fragment>
      )}
    </TouchableOpacity>
  );
}
