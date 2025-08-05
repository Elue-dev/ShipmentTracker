import { ReactNode } from "react";
import { ViewStyle } from "react-native";

export type ButtonProps = {
  onPress: () => void;
  isLoading?: boolean;
  label?: string;
  loadingText?: string;
  classNames?: string;
  disabled?: boolean;
  outlined?: boolean;
  asChild?: boolean;
  children?: ReactNode;
  styles?: ViewStyle;
  centered?: boolean;
  full?: boolean;
  danger?: boolean;
  uppercased?: boolean;
  softBg?: boolean;
};

export type TagStatus =
  | "received"
  | "error"
  | "delivered"
  | "cancelled"
  | "on hold";
