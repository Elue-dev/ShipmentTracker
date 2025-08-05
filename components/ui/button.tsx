import { ButtonProps } from "@/types/ui/ui.types";
import { cn } from "@/utils";
import { Fragment } from "react";
import { ActivityIndicator, Text, TouchableOpacity, View } from "react-native";

export default function Button({
  onPress,
  isLoading,
  label,
  full = true,
  loadingText,
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
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      style={styles}
      className={cn(
        "bg-primary p-5 rounded-md mt-5 font-semibold min-w-[100px]",
        isLoading ? "opacity-70" : "",
        inverted ? "bg-white" : "",
        outlined ? "bg-transparent border border-primary" : "",
        softBg ? "bg-primary-300" : "",
        disabled ? "bg-disabled-bg border-0" : "",
        centered ? "self-center" : "",
        full ? "w-full" : "",
        danger ? "bg-[#c81e1e]" : "",
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
            <View className="flex-row justify-center items-center">
              <ActivityIndicator color="#fff" size="small" />
              <Text
                className={cn(
                  "text-white text-[17px] ml-2 font-Medium",
                  uppercased ? "uppercase" : "",
                  softBg || inverted ? "text-primary" : ""
                )}
              >
                {loadingText ?? "Loading..."}
              </Text>
            </View>
          ) : (
            <Text
              className={cn(
                "text-white text-[19px] text-center font-Medium",
                outlined && "text-primary",
                disabled && "text-disabled-text2",
                uppercased ? "uppercase" : "",
                softBg || inverted ? "text-primary" : ""
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
