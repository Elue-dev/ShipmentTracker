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
}: ButtonProps) {
  return (
    <TouchableOpacity
      activeOpacity={disabled ? 1 : 0.7}
      style={styles}
      className={cn(
        "bg-primary p-5 rounded-md mt-5 font-semibold min-w-[100px]",
        classNames,
        isLoading ? "opacity-70" : "",
        outlined ? "bg-transparent border border-primary" : "",
        softBg ? "bg-primary-300" : "",
        disabled ? "bg-disabled border-0" : "",
        centered ? "self-center" : "",
        full ? "w-full" : "",
        danger ? "bg-[#c81e1e]" : ""
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
                  "text-white text-[17px] ml-2 font-semibold",
                  uppercased ? "uppercase" : "",
                  softBg ? "text-primary" : ""
                )}
              >
                {loadingText ?? "Loading..."}
              </Text>
            </View>
          ) : (
            <Text
              className={cn(
                "text-white text-[17px] text-center font-semibold",
                outlined && "text-primary",
                disabled && "text-white",
                uppercased ? "uppercase" : "",
                softBg ? "text-primary" : ""
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
